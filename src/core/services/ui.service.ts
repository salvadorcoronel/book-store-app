import { ComponentFactoryResolver, Injectable, Injector, NgZone, ApplicationRef, ComponentRef } from '@angular/core';
import { getRootLayout, View, CoreTypes, ProxyViewContainer } from '@nativescript/core';
import { GenericParams } from './tokens/tokens';

export const DEFAULT_ANIMATION_CURVE = CoreTypes.AnimationCurve.cubicBezier(0.17, 0.89, 0.24, 1.11);

@Injectable({ providedIn: 'root'})
export class UIService {
	constructor(private zone: NgZone, private injector: Injector, private componentFactoryResolver: ComponentFactoryResolver, private applicationRef: ApplicationRef) {}
	private _customModal;

	bringCustomModalToFront(): Promise<void> {
		return getRootLayout().bringToFront(this._customModal);
	}

	showCustomModal(customComponent): void {
		this.getView(customComponent).then((v) => {
			this._customModal = v;
			getRootLayout()
				.open(this._customModal, {
					shadeCover: {
						color: '#000',
						opacity: 0.5,
						tapToClose: false,
					},
					animation: {
						enterFrom: {
							translateY: 699,
							duration: 500,
							curve: DEFAULT_ANIMATION_CURVE,
						},
						exitTo: {
							translateY: 699,
							duration: 500,
							curve: DEFAULT_ANIMATION_CURVE,
						},
					},
				})
				.then(() => {
					console.log('opened');
				})
				.catch((err) => {
					console.log('error opening', err);
				});
		});
	}

	closeCustomModal(): void {
		if (this._customModal) {
			getRootLayout()
				.close(this._customModal)
				.then(() => {
					this.destroyNgRef(this._customModal);
					console.log('closed');
				})
				.catch((err) => {
					console.log('error closing', err);
				});
		}
	}

	closeAll(): void {
		getRootLayout().closeAll();
	}

	destroyNgRef(view: View) {
		if ((<any>view).__ngRef) {
			((<any>view).__ngRef as ComponentRef<View>).destroy();
		}
	}

	getView(component, input?: any): Promise<View> {
		return new Promise((resolve) => {
			const componentFactory = this.componentFactoryResolver.resolveComponentFactory<View>(component);
			this.zone.run(() => {
				const childInjector = Injector.create({
					providers: [{ provide: GenericParams, useValue: input }],
					parent: this.injector,
				});
				const componentRef = componentFactory.create(childInjector);
				let componentView = componentRef.location.nativeElement;
				if (componentView instanceof ProxyViewContainer) {
					componentView = componentView.getChildAt(0);
				}

				if (componentView.parent) {
					(<any>componentView.parent).removeChild(componentView);
				}
				(<any>componentView).__ngRef = componentRef;
				this.applicationRef.attachView(componentRef.hostView);
				componentRef.changeDetectorRef.detectChanges();

				resolve(componentView);
			});
		});
	}
}