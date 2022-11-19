import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import {ResultsComponent} from './results/results.component';
import {MovieCardComponent} from './results/movie-card/movie-card.component';
import {ImageComponent} from './results/movie-card/image/image.component';
import {HttpClientModule} from "@angular/common/http";
import { MovieComponent } from './movie/movie.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ResultsComponent,
    MovieCardComponent,
    ImageComponent,
    MovieComponent,
    HomePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'movie/:id', component: MovieComponent},
      {path: 'home', component: HomePageComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
