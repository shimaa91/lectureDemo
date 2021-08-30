import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { IEmployee } from 'src/app/shared classes/IEmployee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeList:IEmployee[]=[];
  errorMessage;
  constructor( private  empServiceDate:EmployeeService ) { }

  ngOnInit(): void {
    this.empServiceDate.getList().subscribe(
      data=>{
        this.employeeList=data;
      },
      errorMsg=>{
        this.errorMessage=errorMsg;
      }
    )
  }

}
