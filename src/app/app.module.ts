import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side.component';

import { AuthModule } from './../auth/auth.module';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { SquarePipe } from './customPipes/square.pipe';
import { EmployeeListComponent } from './Emplyees/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './Emplyees/employee-details/employee-details.component';
import { EmployeeService } from './services/employee.service';
import { TestObservableComponent } from './test-observable/test-observable.component';
import {HttpClientModule} from '@angular/common/http';
import { ParentComponent } from './component interaction/parent/parent.component';
import { ChildComponent } from './component interaction/child/child.component';
import { DepartmentsComponent } from './departments/departments.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { OverViewComponent } from './over-view/over-view.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { EnrollComponent } from './enroll/enroll.component';
import { RegisterComponent } from './register/register.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LeftSideComponent,
    RightSideComponent,
    BindingComponent,
    StructuralDirectivesComponent,
    PipesComponent,
    SquarePipe,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    TestObservableComponent,
    ParentComponent,
    ChildComponent,
    DepartmentsComponent,
    PageNotFoundComponent,
    DepartmentDetailsComponent,
    OverViewComponent,
    ContactInfoComponent,
    EnrollComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  // providers: [EmployeeService],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
