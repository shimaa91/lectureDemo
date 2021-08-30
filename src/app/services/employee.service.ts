import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {IEmployee} from '../shared classes/IEmployee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //_url="localhost:4355/employees"
  _url="assets/data/employeesssssssData.json";

  constructor(private _http:HttpClient) { }

  getList():Observable<IEmployee[]>
  {    
    return this._http.get<IEmployee[]>(this._url)
    .pipe(
      catchError(
        err=>{
          return throwError("server Problem");
        }
      )
    );
  }

}
