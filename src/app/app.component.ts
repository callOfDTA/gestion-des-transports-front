import { Component, OnInit } from '@angular/core';
import { environment } from "../environments/environment";
import { Personne } from './models';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:Personne = new Personne();
  apiUrl = environment.apiUrl;

  ngOnInit() {
    this.user.nom = "Paluchon";
    this.user.prenom = "Jean-Luc";
    this.user.matricule = "1234";
  }
}
