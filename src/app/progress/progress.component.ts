import { Component } from '@angular/core';
import { ProgressService } from './progress.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  providers: [ProgressService]
})
export class ProgressComponent {
  constructor(
    private service: ProgressService,
  ) {}

  public get isProgress$() {
    return this.service.isProgress$;
  }
}
