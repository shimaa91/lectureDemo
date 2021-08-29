import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getList()
  {
    return [
      {"name":"Ali","age":20},
      {"name":"Ahmed","age":10},
      {"name":"Mohamed","age":25},
      {"name":"Nada","age":20},
      {"name":"Nor","age":15},
      {"name":"Asmaa","age":20},
      {"name":"Mahmoud","age":23},
      {"name":"Shimaa","age":20},
      {"name":"Hossam","age":24}    
    ];
  }

}
