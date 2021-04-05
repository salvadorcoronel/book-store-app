import { NgModule } from '@angular/core';
import { BookStoreData } from '~/data/book-store.data';
import { AppService } from './services/app.service';
import { UIService } from './services/ui.service';

@NgModule({
  providers: [
    AppService,
    UIService,
    BookStoreData
  ]
})
export class CoreModule {

}