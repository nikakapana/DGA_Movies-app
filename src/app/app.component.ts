import {Component, OnInit} from '@angular/core';
import {GetMoviesService} from "./core/services/get-movies.service";
import {MovieItem} from "./core/interfaces/movieResponse";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'movie-app';
  popularMovies: MovieItem[] = []
  movieSearchValue: MovieItem[] = []

  constructor(private getMoviesService : GetMoviesService) {

  }
  ngOnInit(): void {
    this.getMoviesService.getMovies().subscribe(res => {
      console.log(res)
      this.popularMovies = res.results
    })
  }

  onSearch($event: any) {
    this.getMoviesService.getMovies($event).subscribe(res => {
      console.log(res)
      this.movieSearchValue = res.results
    })
  }

  clearSearch() {
    this.movieSearchValue = []
  }
}
