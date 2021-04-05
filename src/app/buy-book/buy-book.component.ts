import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular';
import { EventData, isAndroid, isIOS, Label } from '@nativescript/core';
import { UIService } from '~/core/services/ui.service';
import { Book } from '~/data/book';
import { BookStoreData } from '~/data/book-store.data';

@Component({
  moduleId: module.id,
  selector: 'BuyBook',
  templateUrl: './buy-book.component.html',
})
export class BuyBookComponent implements OnInit {
  book: Book;
  constructor(
    private bookStoreData: BookStoreData,
    private uiService: UIService,
    private routerExtensions: RouterExtensions) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
   //this.book = this.bookStoreData.getBooks('SCF-001');
    console.log('===> Book: ', this.book);
  }

  onActionBarItemLoaded(args: EventData): void {
    const lbl = args.object as Label;
    if (isAndroid) {
      lbl.android.setGravity(17)
    }
  }

  goBack() {
    this.routerExtensions.back()
  }

  closeBaseModal(): void {
    this.uiService.closeCustomModal();
    this.routerExtensions.navigate([{ outlets: { base: null } }], { clearHistory: true });
  }

  isIOS(): boolean {
    return isIOS;
  }

  isAndroid(): boolean {
      return isAndroid;
  }
}
