import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private _url: string = "https://haofu.airbusdigital.com/api/hof/mro/finding";

  getTemplates(): Observable<any>{
    return this.http.get(this._url)
    .pipe(
      map( response => {return response}),
      catchError( (err, caught) => { return throwError(err)})
    );
  }
}
