import { Component, OnInit} from '@angular/core';
import { Annonce, Personne} from '../models';
import { MatDialog, MatDialogRef } from "@angular/material";
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { ReservationPipe, HistoriquePipe } from '../filter/historique.pipe';
import { DatePipe } from '../filter/date.pipe';
import { AdressePipe } from '../filter/adresse.pipe';
import { Router } from '@angular/router';
import { ReservationService } from '../services/reservation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lister-annonce',
  templateUrl: './lister-annonce.component.html',
  styleUrls: ['./lister-annonce.component.css']
})
export class ListerAnnonceComponent implements OnInit {
  user:Personne =  new Personne();
  annonce:Annonce;

  reserv:Observable<Annonce[]>;

  constructor(private dialog: MatDialog, private router: Router, private _reservationServ: ReservationService) {
  }

  ngOnInit() {
    this.user.matricule = "1234"
    this.reserv = this._reservationServ.lister(this.user.matricule);
  }

  detail(annonce:Annonce): void {
    let dialogRef = this.dialog.open(CourseDialogComponent, {
      width: '350px', data: { annonce : annonce }
    });
  }

  creer() {
    this.router.navigate(['/collaborateur/propositions/creer']);
  }
}