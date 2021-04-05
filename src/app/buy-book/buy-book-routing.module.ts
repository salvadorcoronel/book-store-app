import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { BuyBookComponent } from './buy-book.component'

const routes: Routes = [{ path: '', component: BuyBookComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class BuyBookRoutingModule {}
