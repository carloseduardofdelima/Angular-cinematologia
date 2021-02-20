import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.css']
})
export class DetalhesFilmeComponent implements OnInit {
  ID = this.router.url.slice(10);
  filme: any;
  image_URL = "https://image.tmdb.org/t/p/original/";
  

  constructor(private film: FilmesService, private router: Router) {
  }

  ngOnInit(): void {
    this.film.movieDetails(this.ID).subscribe(res => this.filme = res);
    console.log(this.filme);
  }

}
