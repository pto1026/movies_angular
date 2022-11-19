import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import Results from "./results/results";
import Details from "./movie/details";

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {

  constructor(private http: HttpClient) {
  }

  search(substr: string) {
    return this.http.get<Results>(`${environment.url}/3/search/movie?api_key=${environment.key}&query=${substr.toLowerCase().trim()}`, {
      observe: 'body', responseType: 'json'
    });
  }

  searchPage(substr: string, page: number) {
    return this.http.get<Results>(`${environment.url}/3/search/movie?api_key=${environment.key}&query=${substr.toLowerCase().trim()}&page=${page}`, {
      observe: 'body', responseType: 'json'
    })
  }


  getTrending(page: number = 1) {
    return this.http.get<Results>(`${environment.url}/3/trending/movie/week?api_key=${environment.key}&page=${page}`, {
      observe: 'body',
      responseType: 'json'
    });
  }

  getMovie(id: string) {
    return this.http.get<Details>(`${environment.url}/3/movie/${id}?api_key=${environment.key}`, {
      observe: 'body',
      responseType: 'json'
    });
  }
}
