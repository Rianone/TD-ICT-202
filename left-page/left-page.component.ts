import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-left-page',
  templateUrl: './left-page.component.html',
  styleUrls: ['./left-page.component.css']
})
export class LeftPageComponent implements OnInit {
  information: any;
  photo!:any;
  nom: string="";
  adresse: string="";
  telephone: string="";
  resume: string="";
  langue: string="";
  loisir: string="";

  constructor(private info : InfoService) { }

  ngOnInit(): void {
     this.information = this.info.getInfo();
     console.log(this.information)
  }

  setName(){
    if(this.nom != ""){
      this.information[0].nom = this.nom;
      this.info.setInfo(this.information)
    }
  }

  setAdr(){
    if(this.adresse != ""){
      this.information[0].adresse = this.adresse;
      this.info.setInfo(this.information)
    }
  }

  setTel(){
    if(this.telephone != ""){
      this.information[0].telephone = this.telephone;
      this.info.setInfo(this.information)
    }
  }

  setRsm(){
    if(this.resume != ""){
      this.information[1].resume = this.resume;
      this.info.setInfo(this.information)
    }
  }

  addLang(){
    if(this.langue != ""){
      this.information[2].langue.push(this.langue);
      this.info.setInfo(this.information)
    }
  }

  addLois(){
    if(this.loisir != ""){
      this.information[3].loisirs.push(this.loisir);
      this.info.setInfo(this.information)
    }
  }


}
