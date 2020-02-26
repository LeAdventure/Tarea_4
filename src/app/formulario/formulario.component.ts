import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  
  nom: string;
  ape: string;
  mail: string;
  calendar: string;
  gender: string;
  contra: string;
  conf: string;
  constructor(){
    
  }
  ngOnInit() {}

  isValid(): boolean{
    if((this.nom==undefined || this.nom==' ') || (this.ape==undefined || this.ape==' ') || (this.mail==undefined || this.mail==' ') || (this.mail==undefined) || (this.gender==undefined) || (this.contra==undefined || this.contra==' ') || ((this.conf==undefined || this.conf==' ') || this.conf!=this.contra)){
      return false;
    } else {
      return true;
    }
  }
  

}
