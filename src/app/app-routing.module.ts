import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'Search', component: SearchComponent },
  { path: 'Artist/:id', component: ArtistaComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
