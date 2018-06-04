import { Component, OnInit } from '@angular/core';
import {Annonce, Personne, Vehicule} from "../models";
//
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-reserver-covoiturage',
  templateUrl: './reserver-covoiturage.component.html',
  styleUrls: ['./reserver-covoiturage.component.css']
})

export class ReserverCovoiturageComponent implements OnInit {
  annonces : Annonce[] = [];
  constructor(private _http:HttpClient) { }

  ngOnInit() {
    this._http.get("http://localhost:8080/annonces")
      .toPromise()
      .then((data: any) => {
            console.log(data);
            let i =0;
            //this.annonces[2] = data[0];
            data.forEach(element => {
              let a = new Annonce();
              a.heure= new Date(element.date);
              a.adresseDepart=element.adresseDepart;
              a.adresseArriver=element.adresseArriver;
              let vehicule = new Vehicule();
              vehicule.marque=element.vehicule.marque;
              vehicule.modele=element.vehicule.modele;
              a.vehicule=vehicule;
              let conducteur = new Personne();
              conducteur.prenom=element.auteurAnnonce.prenom;
              conducteur.nom=element.auteurAnnonce.nom;
              a.conducteur=conducteur;
              a.placeDispo=element.nombrePlace;
              this.annonces.push(a);
            });
      });
    let annonce1 = new Annonce();
    annonce1.placeDispo=0;
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
    annonce1.heure = new Date("09/03/2018 08:30");
    annonce1.vehicule=vehicule1;
    let annonce2 = new Annonce();
    annonce2.placeDispo=2;
    annonce2.adresseDepart="Gare de Paris";
    annonce2.adresseArriver="Gare de Saint-Nazaire";
    annonce2.heure = new Date("10/03/2018 10:00:00"); 
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
    //console.log(this.annonces[0].heure.toLocaleString);
    console.log(this.annonces.filter(a => a.adresseDepart == "Gare de Paris"))
  }
  public confirmer(annonce:Annonce){
    if(confirm("Départ : \t" + annonce.adresseDepart + "\nArrivée : \t" + annonce.adresseArriver + "\nHeure : \t" + annonce.heure.toLocaleString()  + "\nVoiture : \t" + annonce.vehicule.marque + " " + annonce.vehicule.modele + "\nChauffeur : \t" + annonce.conducteur.prenom + " " + annonce.conducteur.nom + "\nÊtes-vous sûr de vouloir réserver pour ce covoiturage ?")) {
      console.log("Réservation covoiturage confirmée");
    }
    
    
  }
  public filtrerDepart(text:string) {
    console.log("filtrage départ " + text);
    this.annonces.filter(a => a.adresseDepart == text);
  }
  public filtrerArrivee(text:string) {
    console.log("filtrage arrivée " + text);
  }
  public filtrerDate(date:Date) {
    console.log("filtrage date " + date);
  }

}
