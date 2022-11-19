import { Component, OnInit } from '@angular/core';
import {MovieSearchService} from "../movie-search.service";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import Details from "./details";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  data!: Details;
  id$ = this.route.paramMap
    .pipe(
      map((params: ParamMap) => params.get('id'))
    )

  constructor(private movieSearch: MovieSearchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    this.movieSearch.getMovie(Number(this.id$)).subscribe((data: Details) => this.data = data)

  }
}
