import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "https://haofu.airbusdigital.com/api/hof/mro"

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: variable-name

  getUser(username, userpassword) : Observable<any> {
    console.log(username+" "+userpassword)
    return this.http.get(this.baseURL+'/user/login?username='+username+'&userpassword='+userpassword)
      .pipe(
        map( response => {
          console.log(response)
          return response
        }),
        catchError((err, caught) => {
          console.log(err)
          return throwError(err);
        })
      )
  }

  getJobcard() : Observable<any> {
    return this.http.get(this.baseURL+'/jobcard')
      .pipe(
        map( response => {
          console.log(response)
          return response;
        }),
        catchError((err, caught) => {
          console.log(err)
          return throwError(err);
        })
      )
  }

}
