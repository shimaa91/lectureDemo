import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerTitle:string="Test Title";
  webSiteURL=window.location.href;
  headerId:string="txtID";

  hasErr=true;
  isSpecial=true;

  classStyle:string="text-danger";

  setOfClasses={
    "text-success":!this.hasErr,
    "text-danger":this.hasErr,
    "text-special":this.isSpecial
  };

  myStyle:string="red";

  setOfStyles={
    color:'gray',
    fontStyle:'italic'
  }



  displayMsg(){
    console.log("Hello from Model");
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
