import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  msg="Hello child from parent";

  msgFromChildProp;  
  constructor() { }

  @ViewChild(ChildComponent) childcom :ChildComponent;

  ngOnInit(): void {
    //this.childcom.DisplayMsg();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.childcom.ngOnInit();
  }

  printMsg()
  {
    alert("Hello I'm Executing")
  }

}
