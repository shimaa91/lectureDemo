import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeeListComponent } from './Emplyees/employee-list/employee-list.component';
import { OverViewComponent } from './over-view/over-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [  
  {path:'',redirectTo:'/departments',pathMatch:'full'},
  {path:'departments',component:DepartmentsComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'departments/:id',component:DepartmentDetailsComponent,
    children:[
      {path:'overView',component:OverViewComponent},
      {path:'contactInfo',component:ContactInfoComponent}
    ]},  
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
