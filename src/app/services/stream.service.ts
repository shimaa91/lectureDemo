import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  data:Observable<string>;
  constructor() { }

  createStream(){
    this.data=new Observable(observer=>{
      setTimeout(()=>{
        observer.next("value1");
      },1000);
      setTimeout(()=>{
          observer.error("some error")
      },3000)
      setTimeout(()=>{
        observer.next("value3");
      },5000)
      setTimeout(()=>{
        observer.complete();
      },6000)      
    })
    return this.data.pipe(
      catchError(
        err=>{
          return throwError(err.message || "server error")
        }));
  }
}
