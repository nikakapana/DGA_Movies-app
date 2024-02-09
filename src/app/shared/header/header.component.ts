import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {resolve} from "@angular/compiler-cli";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Output() searchValue = new EventEmitter<any>();
  @Output() clearValue = new EventEmitter<boolean>();
  movieSearch = new FormControl('');

  ngOnInit(): void {
    this.movieSearch.valueChanges.subscribe(res => {
      if (res === '') {
        this.clearValue.emit(true)
      }
    })
  }

  searchMovies() {
    this.searchValue.emit(this.movieSearch.value);
  }

}
