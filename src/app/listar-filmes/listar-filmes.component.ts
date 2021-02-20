import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css']
})
export class ListarFilmesComponent implements OnInit {
  detalhes_URL = '/detalhes/';

  constructor(private film: FilmesService) { }

  filmes_populares: [];
  filmes_lancamento: [];
  image_URL = "https://image.tmdb.org/t/p/w200/";

  ngOnInit(){
    this.film.listPopularMovies().subscribe(res => this.filmes_populares = res.results);
    this.film.listPlayingMovies().subscribe(res => this.filmes_lancamento = res.results);
  }

}
