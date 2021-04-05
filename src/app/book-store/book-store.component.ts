import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { EventData, isAndroid, ItemEventData, Label } from '@nativescript/core';
import { UIService } from '~/core/services/ui.service';
import { Book } from '~/data/book';
import { BookStoreData } from '~/data/book-store.data';
import { BaseComponent } from '../base/base.component';

@Component({
  moduleId: module.id,
  selector: 'BookStore',
  templateUrl: './book-store.component.html',
})
export class BookStoreComponent implements OnInit {
  books: Array<Array<Book>>;
  constructor(
    private uiService: UIService,
    private bookStoreData: BookStoreData,
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.books = this.bookStoreData.getBooks();
    console.log('===> Books: ', this.books);
  }

  onActionBarItemLoaded(args: EventData): void {
    const lbl = args.object as Label;
    if (isAndroid) {
      lbl.android.setGravity(17)
    }
  }

  onItemTap(args: ItemEventData) {
    this.uiService.showCustomModal(BaseComponent);
    console.log(
      `Index: ${args.index}; View: ${args.view} ; Item: ${this.books[args.index]}`
    )
    //this.routerExtensions.navigate(['detail'], { relativeTo: this.activatedRoute });
  }
}
