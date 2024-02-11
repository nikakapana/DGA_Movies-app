import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStateSubjectService {
  private dataLoadedSubject = new BehaviorSubject<boolean>(false);

  getDataLoadValue(): Observable<boolean> {
    return this.dataLoadedSubject.asObservable();
  }

  updateDataLoadedState(isDataLoaded: boolean) {
    this.dataLoadedSubject.next(isDataLoaded);
  }
}
