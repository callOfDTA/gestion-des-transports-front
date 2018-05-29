import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../models';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  constructor() { }
  @Input() user:Personne = new Personne();

  ngOnInit() {
  }

}
