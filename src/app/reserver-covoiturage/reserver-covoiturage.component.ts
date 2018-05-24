import { Component, OnInit } from '@angular/core';
import {Annonce, Personne, Vehicule} from "../models";
//
 
@Component({
  selector: 'app-reserver-covoiturage',
  templateUrl: './reserver-covoiturage.component.html',
  styleUrls: ['./reserver-covoiturage.component.css']
})

export class ReserverCovoiturageComponent implements OnInit {
  annonces : Annonce[];
  constructor() { }

  ngOnInit() {
    this.annonces = [];
    let annonce1 = new Annonce();
    annonce1.placeDispo=1;
    annonce1.adresseDepart="Gare de Nantes";
    annonce1.adresseArriver="Gare de Saint-Nazaire";
    //annonce1.heure="";
    let conducteur1 = new Personne();
    conducteur1.prenom="François";
    conducteur1.nom="Georges";
    annonce1.conducteur=conducteur1;
    let vehicule1 = new Vehicule();
    vehicule1.marque="Audi";
    vehicule1.modele="A6";
    annonce1.vehicule=vehicule1;
    let annonce2 = new Annonce();
    annonce2.placeDispo=2;
    annonce2.adresseDepart="Gare de Nantes";
    annonce2.adresseArriver="Gare de Saint-Nazaire";
    //annonce2.heure="";
    let conducteur2 = new Personne();
    conducteur2.prenom="Paul";
    conducteur2.nom="Georges";
    annonce2.conducteur=conducteur2;
    let vehicule2 = new Vehicule();
    vehicule2.marque="Peugeot";
    vehicule2.modele="5008";
    annonce2.vehicule=vehicule2;
    this.annonces.push(annonce1);
    this.annonces.push(annonce2);
    //console.log(this.annonces[0]);
  }

}
