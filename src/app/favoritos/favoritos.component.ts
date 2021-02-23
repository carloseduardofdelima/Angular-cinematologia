import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  image_URL = "https://image.tmdb.org/t/p/w200/";
  detalhes_URL = '/detalhes/';
  filmes_favoritos = [];

  constructor(private film: FilmesService) { }

  ngOnInit(): void {
    let favoritos = window.localStorage.getItem('filmes_favoritos').split(',');

    favoritos.forEach(favorito => {
      this.film.movieDetails(favorito).subscribe(res => this.filmes_favoritos.push(res));

    })
  }
}
