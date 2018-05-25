import { Component, OnInit } from '@angular/core';
import { Annonce } from '../models';
import { MatDialog, MatDialogRef } from "@angular/material";
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { ReservationPipe, HistoriquePipe } from '../filter/historique.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lister-annonce',
  templateUrl: './lister-annonce.component.html',
  styleUrls: ['./lister-annonce.component.css']
})
export class ListerAnnonceComponent implements OnInit {
  annonce1:Annonce = new Annonce();
  annonce2:Annonce = new Annonce();
  annonce3:Annonce = new Annonce();

  annonces:Annonce[] = [];
  

  constructor(private dialog: MatDialog, private router: Router) {
  }

  ngOnInit() {
    this.annonce1.adresseDepart = "rue départ 1";
    this.annonce1.adresseArriver = "rue arrivé 1";
    this.annonce1.heure = new Date('December 17, 2018 13:45:00');

    this.annonce2.adresseDepart = "rue départ 2";
    this.annonce2.adresseArriver = "rue arrivé 2";
    this.annonce2.heure = new Date('December 11, 2016 23:12:00');

    this.annonce3.adresseDepart = "rue départ 3";
    this.annonce3.adresseArriver = "rue arrivé 3";
    this.annonce3.heure = new Date('December 11, 2016 23:12:00');

    this.annonces = [this.annonce1, this.annonce2, this.annonce3];
  }

  detail(annonce:Annonce): void {
    let dialogRef = this.dialog.open(CourseDialogComponent, {
      width: '350px', data: { annonce : annonce }
    });
  }

  creer() {
    this.router.navigate(['/collaborateur/reservations/creer']);
  }
}