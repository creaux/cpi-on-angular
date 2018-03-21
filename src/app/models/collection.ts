import { BookAPI, Book } from './book';
import { Page, PageAPI } from './page';

export class Collection extends Page {
  totalPages;
  data: Array<Book>;

  constructor({ totalPages, data, ...args }) {
    super(<Page>args);

    this.totalPages = totalPages;
    this.data = data;
  }
}

export class CollectionAPI extends PageAPI {
  total_pages;
  data: Array<BookAPI>;

  constructor({ total_pages, data, ...args }) {
    super(<PageAPI>args);
    this.total_pages = total_pages;
    this.data = data;
  }
}
