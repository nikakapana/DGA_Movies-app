import { Component, Input } from '@angular/core';
import {MovieItem} from "../../core/interfaces/movieResponse";
import {ItemComponent} from "../item/item.component";
import {NgForOf} from "@angular/common";
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss'],
  imports: [
    ItemComponent,
    NgForOf,
    MatGridListModule
  ],
  standalone: true
})
export class MoviesContainerComponent {
  @Input() items: MovieItem[] = [];
  @Input() title: string = '';
}
