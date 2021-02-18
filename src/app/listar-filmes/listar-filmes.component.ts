import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css']
})
export class ListarFilmesComponent implements OnInit {

  constructor(private film: FilmesService) { }
  filmes_populares: [];
  series_populares: [];
  image_URL = "https://image.tmdb.org/t/p/w200/";

  ngOnInit(){
    this.film.listPopularMovies().subscribe(res => this.filmes_populares = res.results);
    this.film.listPopularShows().subscribe(res => this.series_populares = res.results);
  }

}
