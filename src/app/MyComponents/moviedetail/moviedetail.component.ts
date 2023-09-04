import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent {

  movieDetail : any= []

  spinner = false
  
Id! : string

constructor(
private appService: AppService,

private activateRoute: ActivatedRoute,
private router: Router,


) {

}

ngOnInit(): void {

this.activateRoute.paramMap.subscribe((params) => {
this.Id = params.get('Id')!;

});
this.getMovieById()

}

getMovieById()
{
this.spinner = true
this.appService.getMovieById(this.Id).subscribe({
next: (res) => {
this.movieDetail.push(res)

},
error:(err) =>{
//this.toaster.error('', err.error)
}
})

}
}