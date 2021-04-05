import { Component } from '@angular/core'
import { View } from '@nativescript/core';
import { take } from 'rxjs/operators';
import { AppService } from '~/core/services/app.service';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  appReady: boolean = false;
  intro: View;
  constructor(private appService: AppService){}

  ngOnInit() {
    this.appService.appReady$.pipe(
      take(1)
    ).subscribe(() => {
      this.appReady = true;
    })
  }

  loadedIntro(args) {
    this.intro = args.object;
  }
}
