import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent {
  @Input() public columnsToDisplay;
  @Input() public dataSource;
  @Input() public page;
  // tslint:disable-next-line no-output-rename
  @Output() public filterChange = new EventEmitter();
  // tslint:disable-next-line no-output-rename
  @Output() public pageChange = new EventEmitter();

  public set emitFilter(value) {
    this.filterChange.emit(value);
  }

  public set emitPage(value) {
    this.pageChange.emit(value);
  }
}
