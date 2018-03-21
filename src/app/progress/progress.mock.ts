import { ProgressService } from './progress.service';
import { Observable } from 'rxjs/Observable';

export const MockStore = {
  select() {
    return Observable.create(observer => observer.next(true));
  }
};

export const MockProgressService: Partial<ProgressService> = {
  isProgress$: MockStore.select(),
};
