import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { BuyBookRoutingModule } from './buy-book-routing.module'
import { BuyBookComponent } from './buy-book.component'

@NgModule({
  imports: [NativeScriptCommonModule, BuyBookRoutingModule],
  declarations: [BuyBookComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BuyBookModule {}
