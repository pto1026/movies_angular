import { Component, OnInit } from '@angular/core';
import Results from "../results/results";
import {MovieSearchService} from "../movie-search.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'movies';
  data!: Results;
  substr!: string;
  constructor(public movieSearch: MovieSearchService) {
  }
  ngOnInit(): void {
    this.movieSearch.getTrending().subscribe((data: Results) => this.data = data);
  }


  search(str: string) {
    this.substr = str;
    this.movieSearch.search(this.substr).subscribe((data: Results) => this.data = data);
  }

  searchPage(str: string, page: number) {
    this.movieSearch.searchPage(str, page).subscribe((data: Results) => this.data = data);
  }

  getTrending(page: number = 1) {
    this.movieSearch.getTrending(page).subscribe((data: Results) => this.data = data);
  }
}
