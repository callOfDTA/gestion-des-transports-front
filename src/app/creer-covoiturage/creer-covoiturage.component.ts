import { Component, OnInit } from '@angular/core';
import { Annonce, Vehicule, Adresse, Personne, Role } from '../models';
import { Router } from '@angular/router';
import { ReservationService } from '../services/reservation.service';
import { DEFAULT_RESIZE_TIME } from '@angular/cdk/scrolling';
import { MatDialog, MatDialogRef } from "@angular/material";
import { ConfirmationAnnonceDialogComponent } from '../confirmation-annonce-dialog/confirmation-annonce-dialog.component';

@Component({
  selector: "app-creer-covoiturage",
  templateUrl: "./creer-covoiturage.component.html",
  styleUrls: ["./creer-covoiturage.component.css"]
})
export class CreerCovoiturageComponent implements OnInit {
  depart: string = "";
  destination: string = "";
  annonce:Annonce = new Annonce(new Vehicule(), new Personne());
  jour:string = "";
  mois:string = "";
  annee:string = "";
  heure:string = "";
  minute:string = "";
  heureTable:string[] = ["01","02","03","04","05","06","07","08","09","10","11","12"];
  minuteTable:string[] = ["00", "10", "20", "30", "40", "50"];

  constructor(private _reservationServ: ReservationService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.annonce.distance = 57;
    this.annonce.duree = "02:15";
  }
  
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

  submit() {
    this.annonce.heure = `${this.annee}-${this.mois}-${this.jour}T${this.heure}:${this.minute}:00`
    this.annonce.conducteur.email = "email";
    this.annonce.conducteur.matricule = "963258741";
    this.annonce.conducteur.nom = "JeanTOTO";
    this.annonce.conducteur.prenom = "Eude";
    this.annonce.conducteur.photo = "jkljlkjlijlkjlj";
    this.annonce.conducteur.role = Role.CHAUFFEUR;
    this.annonce.vehicule.urlImage = "toto";
    this.annonce.placeDispo = this.annonce.vehicule.nbPlace;

    let dialogRef = this.dialog.open(ConfirmationAnnonceDialogComponent, {
      width: '350px', data: { annonce : this.annonce}
    });

    this._reservationServ.publierAnnonce(this.annonce)
      .subscribe( a => {
        this.annonce = a;
        this.router.navigate(['/collaborateur/annonces'])
      }, err => console.log(err));
  }
}
