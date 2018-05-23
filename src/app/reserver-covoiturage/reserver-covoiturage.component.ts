import { Component, OnInit } from '@angular/core';
import {Annonce} from "../models";
//annonces : Annonce[];
 
@Component({
  selector: 'app-reserver-covoiturage',
  templateUrl: './reserver-covoiturage.component.html',
  styleUrls: ['./reserver-covoiturage.component.css']
})

export class ReserverCovoiturageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let annonces:Annonce[];
    let annonce1 = new Annonce();
    annonce1.placeDispo=1;
    annonce1.adresseDepart="Gare de Nantes";
    annonce1.adresseArriver="Gare de Saint-Nazaire";
    annonces.push(annonce1);
  }

}
