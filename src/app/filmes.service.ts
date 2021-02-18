import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'https://api.themoviedb.org/3/';
  }

  listPopularMovies(): Observable<any> {
    return this.http.get(`${this.URL}movie/popular?api_key=3f572c746b6bb58e2cdb4d980512aa0d&language=pt-BR&page=1`);

  }

  listPopularShows(): Observable<any> {
    return this.http.get(`${this.URL}tv/popular?api_key=3f572c746b6bb58e2cdb4d980512aa0d&language=pt-BR&page=1`);
  }
}
