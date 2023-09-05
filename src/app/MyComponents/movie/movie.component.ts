import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  
  spinner = false
  nosearchValue = false
  movieTitle = "Batman"
  MovieList :  any = []

  
  title = 'MovieApp';
       constructor( private appService : AppService,public dialog: MatDialog,)
       {

  
      }
  ngOnInit(): void {
    
this.SearchMovie()
  }

SearchMovie()
{
  this.spinner = true
  this.appService.getMovies(this.movieTitle).subscribe({
    
    next:(res: any) =>
   {
    this.spinner = false
    if(res != null  )
    {
    
    this.MovieList = res
    this.nosearchValue = false;
    }
  else
  {
   
    this.MovieList = []
    this.nosearchValue = true;
  }
  
   },
   error: (err) =>
   {
    this.spinner = false
    alert('Error ,please ensure you have internet and try again')

   }
  })
}

openDialog(image:string): void {
  const dialogRef = this.dialog.open(ImageDialogComponent, {
    width: 'auto',
    height: 'auto',
    data: {img: image}
  });

 
}

}