import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-buscar-filmes',
  templateUrl: './buscar-filmes.component.html',
  styleUrls: ['./buscar-filmes.component.css']
})
export class BuscarFilmesComponent implements OnInit {
  filmes_buscados = [];
  busca: string;

  constructor(private film: FilmesService) { }
  image_URL = "https://image.tmdb.org/t/p/w200/";

  ngOnInit(): void {
  }
  pesquisarFilme() {
    this.film.searchMovie(this.busca).subscribe(res => this.filmes_buscados = res.results);
    console.log(this.filmes_buscados);
  }

}
