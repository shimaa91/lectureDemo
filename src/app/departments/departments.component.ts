import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  departments=[
    {"id":1,"name":"CS"},
    {"id":2,"name":"IT"},
    {"id":3,"name":"Network"},
    {"id":4,"name":"AI"},
  ]

  
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
  selectedId
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      console.log(params.get('id'))
      if(params.get('id')!=null)
      {
      this.selectedId=parseInt(params.get('id'))
      console.log(this.selectedId)
      }
      else{
        this.selectedId=0;
      }
    })
  }

  goToDepartmentDetails(department){
    let deptId=department.id;
    this.router.navigate(['/departments',deptId]);
  }

  isSelected(department){
    return this.selectedId==department.id;
  }

}
