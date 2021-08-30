import { Component, OnInit } from '@angular/core';
import {StreamService} from '../services/stream.service';
@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.scss']
})
export class TestObservableComponent implements OnInit {

  constructor(private streamService:StreamService) { }
  errMsg;
  ngOnInit(): void {
    this.streamService.createStream().subscribe(
      data=>console.log(data),
      err=>this.errMsg=err
    );
  }

}
