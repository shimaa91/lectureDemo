import { Component, OnInit } from '@angular/core';
import { User } from '../shared classes/user';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {

  constructor() { }
  topics=["Angular","Bootstrap","ES Next"]

  userModel:User=new User("Shimaa","24234","shimaa@gmail.com","Angular","EL-Horya st","Assiut","7111","eveninig",true);
  ngOnInit(): void {
  }

}
