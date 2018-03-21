import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressComponent } from './progress.component';
import { MatProgressBarModule } from '@angular/material';
import { Store, StoreModule } from '@ngrx/store';
import { ProgressService } from './progress.service';
import { MockProgressService, MockStore } from './progress.mock';

describe('ProgressComponent', () => {
  let component: ProgressComponent;
  let fixture: ComponentFixture<ProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressComponent ],
      providers: [
        { provide: ProgressService, useValue: MockProgressService },
        { provide: Store, useValue: MockStore }
      ],
      imports: [ MatProgressBarModule, StoreModule.forRoot({}) ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return data from service', function () {
    component.isProgress$.subscribe((data) => {
      expect(data).toBe(true);
    });
  });
});
