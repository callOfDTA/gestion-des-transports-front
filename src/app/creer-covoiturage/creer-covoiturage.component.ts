/*global google*/
import { Component, OnInit } from '@angular/core';
import { Annonce, Adresse } from '../models';

@Component({
  selector: 'app-creer-covoiturage',
  templateUrl: './creer-covoiturage.component.html',
  styleUrls: ['./creer-covoiturage.component.css']
})
export class CreerCovoiturageComponent implements OnInit {

  annonce:Annonce = new Annonce();
  depart:string ="";
  destination:string="";

  constructor() { }

  ngOnInit() {
  }
  getAddressOnChange(a:any){
    this.annonce.adresseArriver = new Adresse();
    this.annonce.adresseArriver.codePostal = a.address_components[6];
    console.log(a.address_components);
    console.log(this.depart)
  }
}
