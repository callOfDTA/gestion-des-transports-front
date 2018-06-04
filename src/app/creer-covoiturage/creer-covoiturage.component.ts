import { Component, OnInit } from '@angular/core';
import { Annonce, Vehicule, Adresse, Personne } from '../models';
import { Router } from '@angular/router';
import { ReservationService } from '../services/reservation.service';
import { DEFAULT_RESIZE_TIME } from '@angular/cdk/scrolling';
import { MatDialog, MatDialogRef } from "@angular/material";
import { ConfirmationAnnonceDialogComponent } from '../confirmation-annonce-dialog/confirmation-annonce-dialog.component';

@Component({
  selector: 'app-creer-covoiturage',
  templateUrl: './creer-covoiturage.component.html',
  styleUrls: ['./creer-covoiturage.component.css']
})
export class CreerCovoiturageComponent implements OnInit {

  annonce:Annonce = new Annonce(new Vehicule());
  depart:string;
  destination:string;
  date:string = new Date().toISOString();
  heure:string = "";
  minute:string = "";
  heureTable:string[] = ["01","02","03","04","05","06","07","08","09","10","11","12"];
  minuteTable:string[] = ["00", "10", "20", "30", "40", "50"];

  constructor(private _reservationServ: ReservationService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }

  submit() {
    let dialogRef = this.dialog.open(ConfirmationAnnonceDialogComponent, {
      width: '350px', data: { annonce : this.annonce }
    });
    this.annonce.heure = this.date;
    this._reservationServ.publierAnnonce(this.annonce)
      .subscribe( a => {
        this.annonce = a;
        this.router.navigate(['/collaborateur/annonces'])
      }, err => console.log(err));
  }

}
