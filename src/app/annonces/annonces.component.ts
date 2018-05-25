import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  creer() {
    this.router.navigate(['/collaborateur/annonces/creer']);
  }

}
