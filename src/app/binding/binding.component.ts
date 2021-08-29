import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  msg="";

  name="sss";
  constructor() { }

  ngOnInit(): void {   
  }

  displayMsg(event){
    // console.log("Welcome from Model");
    // this.msg="New Msg"
    console.log(event);
  }

  displayInputValue(inputControl){
    // console.log("Input value");
    // console.log(inputControl.value)
    // this.msg=inputControl.value;
    this.name=inputControl.value;
  }  
}
