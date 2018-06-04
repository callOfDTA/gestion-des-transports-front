/*global google*/
import { Component, OnInit } from "@angular/core";
import { Annonce, Adresse } from "../models";

@Component({
  selector: "app-creer-covoiturage",
  templateUrl: "./creer-covoiturage.component.html",
  styleUrls: ["./creer-covoiturage.component.css"]
})
export class CreerCovoiturageComponent implements OnInit {
  annonce: Annonce = new Annonce();
  depart: string = "";
  destination: string = "";

  constructor() {}

  ngOnInit() {}

  getAddressDepart(a: any) {
    this.annonce.adresseDepart = new Adresse();
    let adress: string[] = a.formatted_address.split(",");
    this.annonce.adresseDepart.rue = adress[0];
    adress = adress[1].split(" ");
    this.annonce.adresseDepart.codePostal = Number(adress[1]);
    this.annonce.adresseDepart.ville = adress[2];
    this.depart = `${this.annonce.adresseDepart.rue}, ${this.annonce.adresseDepart.codePostal} ${this.annonce.adresseDepart.ville}`
  }

  getAddressArriver(a: any) {
    this.annonce.adresseArriver = new Adresse();
    let adress: string[] = a.formatted_address.split(",");
    this.annonce.adresseArriver.rue = adress[0];
    adress = adress[1].split(" ");
    this.annonce.adresseArriver.codePostal = Number(adress[1]);
    this.annonce.adresseArriver.ville = adress[2];
    this.destination = `${this.annonce.adresseArriver.rue}, ${this.annonce.adresseArriver.codePostal} ${this.annonce.adresseArriver.ville}`
  }
}
