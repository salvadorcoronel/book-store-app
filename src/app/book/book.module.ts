import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { BuyBookComponent } from '../buy-book/buy-book.component'

import { BookRoutingModule } from './book-routing.module'
import { BookComponent } from './book.component'

@NgModule({
  imports: [NativeScriptCommonModule, BookRoutingModule],
  declarations: [BookComponent, BuyBookComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BookModule {}
