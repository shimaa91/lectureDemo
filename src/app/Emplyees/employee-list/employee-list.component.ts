import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/shared classes/IEmployee';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeList:IEmployee[]=[];
  constructor(private empService: EmployeeService) {     
  }

  ngOnInit(): void {
    this.empService.getList().subscribe(
      empData=>{
        this.employeeList=empData;
      },      
      errorMsg=>{
        console.log(errorMsg)
      }
    )
  }

}
