import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss',
  ],
  standalone: true,
  imports: [
    DatePipe
  ]
})
export class FooterComponent implements OnInit {
  date: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
