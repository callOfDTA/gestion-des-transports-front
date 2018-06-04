import { Component, OnInit } from '@angular/core';
import {Annonce, Personne, Vehicule} from "../models";
import { Observable } from 'rxjs';
import { DatePipe, AdressePipe, VehiculePipe, PersonnePipe} from '../pipe/format.pipe';
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
  constructor(private _http:HttpClient) { }

  ngOnInit() {
    this.annonces = this._http.get<Annonce[]>("http://localhost:8080/annonces")}
    
  public confirmer(annonce:Annonce){
    if(confirm("Départ : \t" + annonce.adresseDepart.rue + " " + annonce.adresseDepart.ville + ", " + annonce.adresseDepart.codePostal
      + "\nArrivée : \t" + annonce.adresseArriver.rue + " " + annonce.adresseArriver.ville + ", " + annonce.adresseArriver.codePostal
      + "\nHeure : \t" + annonce.heure
      + "\nVoiture : \t" + annonce.vehicule.marque + " " + annonce.vehicule.modele 
      + "\nChauffeur : \t" + annonce.conducteur.prenom + " " + annonce.conducteur.nom 
      + "\nÊtes-vous sûr de vouloir réserver pour ce covoiturage ?")) {

      console.log("Réservation covoiturage confirmée");
    }
    
    
  }
  // public filtrerDepart(text:string) {
  //   console.log("filtrage départ " + text);
  //   this.annonces.filter(a => a.adresseDepart == text);
  // }
  // public filtrerArrivee(text:string) {
  //   console.log("filtrage arrivée " + text);
  // }
  // public filtrerDate(date:Date) {
  //   console.log("filtrage date " + date);
  // }

}
