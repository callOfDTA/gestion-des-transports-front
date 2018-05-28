import { Component, OnInit } from '@angular/core';
import { Personne } from '../models';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  constructor() { }
  user:Personne = new Personne();

  ngOnInit() {
    this.user.nom = "Paluchon";
    this.user.prenom = "Jean-Luc";
  }

}
