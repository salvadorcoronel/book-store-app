import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { BookStoreRoutingModule } from './book-store-routing.module'
import { BookStoreComponent } from './book-store.component'
import { BaseComponent } from '~/app/base/base.component'

@NgModule({
  imports: [NativeScriptCommonModule, BookStoreRoutingModule],
  declarations: [BookStoreComponent, BaseComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BookStoreModule {}
