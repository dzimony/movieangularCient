import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './MyComponents/movie/movie.component';
import { MoviedetailComponent } from './MyComponents/moviedetail/moviedetail.component';

const routes: Routes = [

  { path : 'movie', component: MovieComponent },
  { path : 'moviedetail/:Id', component: MoviedetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  exports: [RouterModule]
})
export class AppRoutingModule { }
