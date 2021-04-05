import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BookStoreData {

  private books = new Array<Array<Book>>(
    new Array ({
      id: 'SCF-001', 
      title: 'Piense y Hágase Rico',
      author: 'Robert Kiyosaki',
      price: '29.90',
      currency: 'S/.',
      image: 'book-1.png',
      publisherDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sint eos minus, ab numquam expedita deserunt? Dolor dolores reiciendis, sed, quae nisi temporibus laudantium blanditiis culpa maxime ipsum magnam repellendus?',
      released: { year: '2018', month: 'April', day: '23'},
      language: { code: 'ES', text: 'Spanish' },
      pages: 200,
    },
    {
      id: 'SCF-002',
      title: 'El poder del pensamiento positivo',
      author: 'Norman Vincent Peale',
      price: '39.90',
      currency: 'S/.',
      image: 'book-2.png',
      publisherDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sint eos minus, ab numquam expedita deserunt? Dolor dolores reiciendis, sed, quae nisi temporibus laudantium blanditiis culpa maxime ipsum magnam repellendus?',
      released: { year: '1985', month: 'March', day: '24'},
      language: { code: 'ES', text: 'Spanish' },
      pages: 300,
    }),
    new Array({
      id: 'SCF-003', 
      title: 'Piense y Hágase Rico',
      author: 'Robert Kiyosaki',
      price: '29.90',
      currency: 'S/.',
      image: 'book-3.png',
      publisherDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sint eos minus, ab numquam expedita deserunt? Dolor dolores reiciendis, sed, quae nisi temporibus laudantium blanditiis culpa maxime ipsum magnam repellendus?',
      released: { year: '2018', month: 'April', day: '23'},
      language: { code: 'ES', text: 'Spanish' },
      pages: 200,
    },
    {
      id: 'SCF-004',
      title: 'El poder del pensamiento positivo',
      author: 'Norman Vincent Peale',
      price: '39.90',
      currency: 'S/.',
      image: 'book-4.png',
      publisherDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sint eos minus, ab numquam expedita deserunt? Dolor dolores reiciendis, sed, quae nisi temporibus laudantium blanditiis culpa maxime ipsum magnam repellendus?',
      released: { year: '1985', month: 'March', day: '24'},
      language: { code: 'ES', text: 'Spanish' },
      pages: 300,
    })
  );
  constructor() { }

  getBooks(): Array<Array<Book>> {
    return this.books;
  }

  /*getBook(id: string): Book {
    return this.books.filter((item) => item.id === id)[0]
  }*/
  
}