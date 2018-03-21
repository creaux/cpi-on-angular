import { TestBed, inject } from '@angular/core/testing';

import { ProgressService } from './progress.service';
import { Store, StoreModule } from '@ngrx/store';
import createSpyObj = jasmine.createSpyObj;

describe('ProgressService', () => {
  const mockStore = createSpyObj('Store', ['select']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgressService, { provide: Store, useValue: mockStore }],
      imports: [StoreModule.forRoot({})]
    });
  });

  it('should be created', inject([ProgressService], (service: ProgressService) => {
    expect(service).toBeTruthy();
  }));

  it('should call select with progress string parameter', inject([ProgressService], (service: ProgressService) => {
    // tslint:disable-next-line no-unused-expression
    service.isProgress$;
    expect(mockStore.select).toHaveBeenCalledWith('progress');
  }));
});
