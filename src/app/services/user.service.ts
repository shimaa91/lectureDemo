import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _url="";
  constructor(private _http:HttpClient) { }


  careateUser(user:any){
    return this._http.post<any>(this._url,user);
  }

}
