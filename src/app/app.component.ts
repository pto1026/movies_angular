import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MovieSearchService} from "./movie-search.service";
import Results from "./results/results";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
  }
  constructor() {
  }
}
