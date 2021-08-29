import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  isLoggedIn=false;
  ay7aga=true;
  name="ITI"

  color="red";

  redColor="red";

  colors=["red","blue","green","black","gray"]




  constructor() { }

  ngOnInit(): void {
  }

}
