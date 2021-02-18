import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListarFilmesComponent } from './listar-filmes/listar-filmes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'filmes', component: ListarFilmesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
