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
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { SquarePipe } from './customPipes/square.pipe';
import { EmployeeListComponent } from './Emplyees/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './Emplyees/employee-details/employee-details.component';
import { EmployeeService } from './services/employee.service';

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
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule
  ],

  // providers: [EmployeeService],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
