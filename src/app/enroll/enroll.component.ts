import { Component, OnInit } from '@angular/core';
import { User } from '../shared classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {

  constructor(private userService:UserService) { }
  topics=["Angular","Bootstrap","ES Next"]

  userModel:User=new User("","","","","","","","",false);

  hasTopicError=false;
  ngOnInit(): void {
  }

  validateTopic(topicValue)
  {
    if(topicValue==="default")
    {
      this.hasTopicError=true;

    }
    else{
      this.hasTopicError=false;
    }

  }

  submitData()
  {
    this.userService.careateUser(this.userModel).subscribe(
      data=>console.log("Success"),
      error=>console.log(error)
    );
  }

}
