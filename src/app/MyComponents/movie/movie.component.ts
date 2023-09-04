import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  movieTitle = "Batman"
  MovieList :  any = []

  //tasks: Movie[] = tasksData.collection;

  title = 'MovieApp';
       constructor( private appService : AppService)
       {

  
      }
  ngOnInit(): void {
    
this.SearchMovie()
  }

SearchMovie()
{

  this.appService.getMovies(this.movieTitle).subscribe({
    
    next:(res: any) =>
   {

    console.log(res)
    this.MovieList = res
    //this.MovieList.push(res.search)
  
  
   }
  })
}

}
