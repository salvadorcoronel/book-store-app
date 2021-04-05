export interface Book {
  id: string,
  title: string,
  author: string,
  price: string,
  currency: string,
  image: string,
  publisherDescription: string,
  released: { year: string, month: string, day: string},
  language: { code: string, text: string },
  pages: number
}