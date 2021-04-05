import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { BuyBookComponent } from '../buy-book/buy-book.component'

import { BookComponent } from './book.component'

const routes: Routes = [
  { path: '', redirectTo: 'book-detail', pathMatch: 'full' },
  { path: 'book-detail', component: BookComponent },
  {
    path: 'buy-book',
    component: BuyBookComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class BookRoutingModule {}
