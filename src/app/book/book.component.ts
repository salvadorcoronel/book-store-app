import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { EventData, isAndroid, Label } from '@nativescript/core';
import { UIService } from '~/core/services/ui.service';
import { Book } from '~/data/book';
import { BookStoreData } from '~/data/book-store.data';

@Component({
  moduleId: module.id,
  selector: 'Book',
  templateUrl: './book.component.html',
})
export class BookComponent implements OnInit {
  book: Book;
  constructor(
    private bookStoreData: BookStoreData,
    private uiService: UIService,
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute) {
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

  buyBook(): void {
    this.routerExtensions.navigate(['../buy-book'], { relativeTo: this.activatedRoute, animated: true, transition: {
      name: 'slideLeft',
      duration: 500
    }  });
  }

  closeBaseModal(): void {
    this.uiService.closeCustomModal();
    this.routerExtensions.navigate([{ outlets: { base: null } }], { clearHistory: true });
  }
}
