import { Component, Input, OnInit } from '@angular/core';
import {MovieItem} from "../../core/interfaces/movieResponse";
import {NgIf} from "@angular/common";
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  imports: [
    NgIf
  ],
  standalone: true
})
export class ItemComponent implements OnInit {
  @Input() itemData: MovieItem | null = null;


  constructor() {}

  ngOnInit(): void {}
}
