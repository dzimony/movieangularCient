import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl = 'http://localhost:5252/api'

  //baseUrl = 'https://movieapi.pited.ng/api'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   

  constructor(private httpClient: HttpClient) { }


  getMovies(movieTitle : string): Observable<any[]> {
    
   
    return this.httpClient.get<any[]>(this.baseUrl + '/Movies?movieTitle=' + movieTitle)// Making http call})
      .pipe(catchError(this.handleError))
  }


  getMovieById(Id: string ): Observable<any[]> {
      
    return this.httpClient.get<any[]>(this.baseUrl + '/Movies/GetMoviesById?Id='+ Id )
      .pipe(catchError(this.handleError))
  }


  private handleError(error: HttpErrorResponse) {
    {
      return throwError(() => error);
    }

  }
}
