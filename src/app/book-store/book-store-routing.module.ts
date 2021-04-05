import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { BookStoreComponent } from './book-store.component'

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { 
    path: 'books',
    component: BookStoreComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class BookStoreRoutingModule {}