import { Component, OnInit } from '@angular/core';
import { Page, PageMAT } from '../models/page';
import { MatTableDataSource } from '@angular/material';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'app-collection-container',
  template: `
    <app-collection
      [columnsToDisplay]="columnsToDisplay"
      [dataSource]="dataSource"
      [page]="page"
      (filterChange)="filter = $event"
      (pageChange)="page = $event"
    ></app-collection>
  `,
})
export class CollectionContainerComponent implements OnInit {
  public columnsToDisplay = ['id', 'name', 'year'];
  public dataSource;
  private _page;

  constructor(
    private service: CollectionService,
  ) { }

  ngOnInit() {
    this.service.request();
    this.service.collection$.subscribe(({ data, page, perPage, total }) => {
      this.dataSource = new MatTableDataSource(data);
      this._page = new PageMAT({
        pageIndex: page,
        pageSize: perPage,
        length: total,
        pageSizeOptions: [2, 3, 6],
      });
    });
  }

  public set filter(value) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  public set page({ pageIndex, pageSize, length }) {
    this.service.page = new Page({
      page: pageIndex + 1,
      perPage: pageSize,
      total: length,
    });
  }

  public get page() {
    return this._page;
  }
}
