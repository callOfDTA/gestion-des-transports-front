import { Component, OnInit } from '@angular/core';
import { Annonce } from '../models';

@Component({
  selector: 'app-creer-covoiturage',
  templateUrl: './creer-covoiturage.component.html',
  styleUrls: ['./creer-covoiturage.component.css']
})
export class CreerCovoiturageComponent implements OnInit {

  annonce:Annonce;
  depart:string;
  destination:string;

  constructor() { }

  ngOnInit() {
  }

}
