import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import Result from "./result";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit, OnChanges {
  @Input() result!: Result;
  imageUrl!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['result'].firstChange && changes['result'].currentValue.poster_path) this.imageUrl = `${environment.gridPhotoUrl}${changes['result'].currentValue.poster_path}`
  }

}
