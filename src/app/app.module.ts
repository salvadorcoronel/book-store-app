import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptAnimationsModule, NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from '~/core/core.module'
import { AppService } from '~/core/services/app.service'
import { Router } from '@angular/router'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, NativeScriptAnimationsModule, CoreModule],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
  constructor(private router: Router, private appService: AppService){
    setTimeout(() => {
      if (false) {
        this.router.navigate(['other-path']);
      } else {
        this.router.navigate(['book-store']);
      }
      
      // this.loading.hide();
      this.appService.appReady$.next(true);
    }, 2000);
  }
}
