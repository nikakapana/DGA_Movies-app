import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataStateSubjectService } from '../../core/services/dataStateSubject.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() searchValue = new EventEmitter<any>();
  @Output() clearValue = new EventEmitter<boolean>();
  dataInProgress = false;
  movieSearch = new FormControl('');
  today = new Date();

  constructor(private dataStateSubjectService: DataStateSubjectService) {}
  ngOnInit(): void {
    this.movieSearch.valueChanges.subscribe((res) => {
      if (res === '') {
        this.clearValue.emit(true);
      }
    });
    this.dataStateSubjectService
      .getDataLoadValue()
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.dataInProgress = false;
      });
  }

  searchMovies() {
    this.searchValue.emit(this.movieSearch.value);
    this.dataInProgress = true;
  }
}
