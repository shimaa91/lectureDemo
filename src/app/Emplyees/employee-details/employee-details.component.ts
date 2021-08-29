import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeList=[]
  constructor( private  empServiceDate:EmployeeService ) { }

  ngOnInit(): void {
    this.employeeList=this.empServiceDate.getList();
  }

}
