import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-right-page',
  templateUrl: './right-page.component.html',
  styleUrls: ['./right-page.component.css']
})
export class RightPageComponent implements OnInit {
  information:any;
  education:string = ""
  experience:string=""
  competence:string=""

  constructor(private info:InfoService) { }

  ngOnInit(): void {
    this.information = this.info.getInfo();
  }

  test(){
    console.log("hey")
  }

  addEdu(){
    if(this.education != ""){
      let obj = this.education.split(",")
      this.information[4].education.push({"ville":obj[0], "diplome":obj[1], "annee":obj[2]});
      this.info.setInfo(this.information)
    }
  }

  addExp(){
    if(this.experience != ""){
      this.information[5].experience.push(this.experience);
      this.info.setInfo(this.information)
    }
  }

  addComp(){
    if(this.competence != ""){
      this.information[6].competence.push(this.competence);
      this.info.setInfo(this.information)
    }
  }
}
