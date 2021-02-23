import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarFilmesComponent } from './buscar-filmes/buscar-filmes.component';
import { DetalhesFilmeComponent } from './detalhes-filme/detalhes-filme.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { HomeComponent } from './home/home.component';
import { ListarFilmesComponent } from './listar-filmes/listar-filmes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'filmes', component: ListarFilmesComponent },
  { path: 'busca', component: BuscarFilmesComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: '**', component: DetalhesFilmeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
