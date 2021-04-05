import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { BuyBookComponent } from '../buy-book/buy-book.component'
import { BookComponent } from '../book/book.component'

import { BookStoreComponent } from './book-store.component'

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { 
    path: 'books',
    component: BookStoreComponent
  },
  /*{
    path: 'detail',
    outlet: 'base',
    component: BookComponent
  },*/
  {
    path: 'buy-book',
    component: BuyBookComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class BookStoreRoutingModule {}
