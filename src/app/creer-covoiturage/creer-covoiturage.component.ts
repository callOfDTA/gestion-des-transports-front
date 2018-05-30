import { Component, OnInit } from '@angular/core';
import { Annonce, Vehicule } from '../models';

@Component({
  selector: 'app-creer-covoiturage',
  templateUrl: './creer-covoiturage.component.html',
  styleUrls: ['./creer-covoiturage.component.css']
})
export class CreerCovoiturageComponent implements OnInit {

  annonce:Annonce;
  depart:string;
  destination:string;
  vehicule:Vehicule = new Vehicule();
  date:string = "";
  heure:string = "";
  minute:string = "";
  heureTable:string[] = ["01","02","03","04","05","06","07","08","09","10","11","12"];
  minuteTable:string[] = ["00", "10", "20", "30", "40", "50"];

  constructor() { }

  ngOnInit() {
  }

}
