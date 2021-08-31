import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
    private router: Router) { }

  deptId=0;
  ngOnInit(): void {

    // this.deptId=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
       this.deptId=parseInt(params.get('id'))
    })

  }

  goToPrevious(){
    let prevId=this.deptId-1;
    this.router.navigate(['/departments',prevId])
  }

  goToNext(){
    let nextId=this.deptId+1;
    this.router.navigate(['/departments',nextId])
  }

  goTpDepartments(){
    this.router.navigate(['/departments',{"id":this.deptId}])
  }

  goToOverView(){
    this.router.navigate(['overView'],{relativeTo:this.activatedRoute})
  }

  goToContactInfo(){
    this.router.navigate(['contactInfo'],{relativeTo:this.activatedRoute})
  }
}
