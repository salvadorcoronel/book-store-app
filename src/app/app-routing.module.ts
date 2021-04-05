import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { BookComponent } from './book/book.component'

const routes: Routes = [
  { path: '', redirectTo: 'book-store', pathMatch: 'full' },
  {
    path: 'book-store',
    loadChildren: () => import('~/app/book-store/book-store.module').then((m) => m.BookStoreModule),
  },
  {
    path: 'home',
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'book',
    outlet: 'base',
    //component: BookComponent
    loadChildren: () => import('~/app/book/book.module').then((m) => m.BookModule),
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: true
  })],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
