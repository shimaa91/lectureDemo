import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeList=[];
  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeList=this.empService.getList();
  }

}
