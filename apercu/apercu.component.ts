import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-apercu',
  templateUrl: './apercu.component.html',
  styleUrls: ['./apercu.component.css']
})
export class ApercuComponent implements OnInit {
  information: any;

  constructor(private info : InfoService) { }

  ngOnInit(): void {
    this.information = this.info.getInfo();
  }
  test(){
    console.log("hello")
  }
}
