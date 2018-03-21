import { PageEvent } from '@angular/material';

export class Page {
  page: number;
  perPage: number;
  total: number;

  constructor({ page, perPage, total }) {
    this.page = page;
    this.perPage = perPage;
    this.total = total;
  }
}

export class PageAPI {
  page: number;
  per_page: number;
  total: number;

  constructor({ page, per_page, total }) {
    this.page = page;
    this.per_page = per_page;
    this.total = total;
  }
}

export class PageMAT extends PageEvent {
  public pageSizeOptions;

  constructor({ pageIndex, pageSize, length, pageSizeOptions }) {
    super();
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    this.length = length;
    this.pageSizeOptions = pageSizeOptions;
  }
}
