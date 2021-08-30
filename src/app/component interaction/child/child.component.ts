import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  //  @Input() parentData;
  @Input('parentData') msgFromParent;

  @Output() msgFromChild= new EventEmitter();

  constructor() { }

  ngOnInit(): void {    
  }

  sendDataToParent(){
    this.msgFromChild.emit();
  }

  DisplayMsg()
  {
    alert("Hello from child");
  }


}
