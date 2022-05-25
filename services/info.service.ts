import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }
    getInfo(){
       var array = [
        {
            "photo": "../assets/img.jpg",
            "nom": "SIMO MONJAP MAIMOUNA RIANONE",
            "adresse":"Nsam Escale",
            "telephone": "693632252 / 651139200"
        },
        {
            "resume":"Etudiante en ICT For Développement en cycle licence de Génie logiciel, je recherche activement un travail dans le but d'approfondir mon expérience professionnelle dans le domaine du Développement"
        },
        {
            "langues":[
                {
                    "nom": "Francais",
                    "niveau": "B1(moyen)",
                    "pourcentage":"75"
                },
                {
                    "nom": "Anglais",
                    "niveau": "B1(moyen)",
                    "pourcentage":"75"
                },
                {
                    "nom": "Dialecte Local",
                    "niveau": "C1(passable)",
                    "pourcentage":"50"
                }
            ]
        },
        {
            "loisirs":["Les echecs","La dance", "La lecture"]
        },
        {
            "education":[
                {
                    "ville": "GBHS Bafoussam",
                    "diplome":"GCE ADVANCED LEVEL",
                    "annee":"2019-2020"
                },
                {
                    "ville": "GBHS Bafoussam",
                    "diplome":"GCE ORDINARY LEVEL",
                    "annee":"2017-2018"
                }
            ]
        },
        {
            "experience":["Stage de 2 mois a ITIAD entant que developpeuse web."]
        },
        {
            "competence":["Programmation Web classique: HTML, CSS, PHP, JAVASCRIPT","Utilisation de frameworks Web: JQUERY, BOOTSTRAP, REACT-REDUX, NODE JS, SASS..."," Utilisation des outils de versionning et package: GIT et GITHUB, NPM","Modélisation de bases de données : UML, MERISE","Utilisation des modèles de représentation de données, JSON et XML","Utilisation de langages query : SQL, SQL lite"," Utilisation des outils Microsoft : WORD, EXCEL, POWERPOINT...."]
        }
    ]

    if(localStorage.getItem("info")!=null){
        let val:any = localStorage.getItem("info")
        return JSON.parse(val)
    }
    else{
        localStorage.setItem("info", JSON.stringify(array))
        return array
    }
    }

setInfo(newInfo:any[]){
    localStorage.setItem("info", JSON.stringify(newInfo))
}
}