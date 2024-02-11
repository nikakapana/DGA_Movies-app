import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from './core/services/get-movies.service';
import { MovieItem } from './core/interfaces/movieResponse';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DataStateSubjectService } from './core/services/dataStateSubject.service';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'movie-app';
  popularMovies: MovieItem[] = [];
  movieSearchValue: MovieItem[] = [];

  constructor(
    private getMoviesService: GetMoviesService,
    private dataStateSubjectService: DataStateSubjectService,
  ) {}
  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(searchTerm?: string): void {
    this.getMoviesService
      .getMovies(searchTerm)
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        if (searchTerm) {
          this.movieSearchValue = res.results;
          this.dataStateSubjectService.updateDataLoadedState(false);
        } else {
          this.popularMovies = res.results;
        }
      });
  }
  onSearch($event: any) {
    this.fetchMovies($event);
  }

  clearSearch() {
    this.movieSearchValue = [];
  }
}
