import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private URL: string;
  private API_Key: string;

  constructor(private http: HttpClient) {
    this.URL = 'https://api.themoviedb.org/3/';
    this.API_Key = '3f572c746b6bb58e2cdb4d980512aa0d';
  }

  listPopularMovies(): Observable<any> {
      return this.http.get(`${this.URL}movie/popular?api_key=${this.API_Key}&language=pt-BR&page=1`);

  }

  listPlayingMovies(): Observable<any> {
    return this.http.get(`${this.URL}movie/now_playing?api_key=${this.API_Key}&language=pt-BR&page=1`);
  }

  searchMovie(title): Observable<any> {
    return this.http.get(`${this.URL}search/movie?api_key=${this.API_Key}&language=pt-BR&query=${title}&page=1&include_adult=false`);
  }

  movieDetails(id): Observable<any> {
    return this.http.get(`${this.URL}movie/${id}?api_key=${this.API_Key}&language=pt-BR`);
  }




}
