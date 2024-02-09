import {Component, Input, OnInit} from '@angular/core';
import {MovieItem} from "../../core/interfaces/movieResponse";
import {GetMoviesService} from "../../core/services/get-movies.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  @Input() popularMovies: MovieItem[] = []

}
