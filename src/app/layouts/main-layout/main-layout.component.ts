import { Component, Input, OnInit } from '@angular/core';
import { MovieItem } from '../../core/interfaces/movieResponse';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  @Input() popularMovies: MovieItem[] = [];
}
