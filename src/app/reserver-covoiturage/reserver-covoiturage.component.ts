import { Component, OnInit } from '@angular/core';
import {Annonce, Personne, Vehicule, Reservation} from "../models";
import { Observable } from 'rxjs';
import { ReservationService } from '../services/reservation.service';
import { DatePipe, AdressePipe, VehiculePipe, PersonnePipe} from '../pipe/format.pipe';
import { Router } from '@angular/router';
//
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-reserver-covoiturage',
  templateUrl: './reserver-covoiturage.component.html',
  styleUrls: ['./reserver-covoiturage.component.css']
})

export class ReserverCovoiturageComponent implements OnInit {
  // annonces : Annonce[] = [];
  annonces:Observable<Annonce[]>;
  test:Reservation;
  constructor(private _http:HttpClient, private _reservationServ: ReservationService, private router: Router) { }

  ngOnInit() {
    this.annonces = this._http.get<Annonce[]>("http://localhost:8080/annonces");
  }
    
  public confirmer(annonce:Annonce){
    if(confirm("Départ : \t" + annonce.adresseDepart.rue + " " + annonce.adresseDepart.ville + ", " + annonce.adresseDepart.codePostal
      + "\nArrivée : \t" + annonce.adresseArriver.rue + " " + annonce.adresseArriver.ville + ", " + annonce.adresseArriver.codePostal
      + "\nHeure : \t" + annonce.heure
      + "\nVoiture : \t" + annonce.vehicule.marque + " " + annonce.vehicule.modele 
      + "\nChauffeur : \t" + annonce.conducteur.prenom + " " + annonce.conducteur.nom 
      + "\nÊtes-vous sûr de vouloir réserver pour ce covoiturage ?")) {
        this._reservationServ.reserver(new Reservation("1234", annonce.id))
        .subscribe( a => {
          this.router.navigate(['/collaborateur/reservations'])
        }, err => console.log(err));
      };
  }
}