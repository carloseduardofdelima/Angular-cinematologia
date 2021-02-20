import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ListarFilmesComponent } from './listar-filmes/listar-filmes.component';
import { FilmesService } from './filmes.service';
import { FormsModule } from '@angular/forms';
import { BuscarFilmesComponent } from './buscar-filmes/buscar-filmes.component';
import { DetalhesFilmeComponent } from './detalhes-filme/detalhes-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListarFilmesComponent,
    BuscarFilmesComponent,
    DetalhesFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [FilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
