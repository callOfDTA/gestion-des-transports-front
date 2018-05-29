import { Pipe, PipeTransform } from '@angular/core';
import { Annonce, Adresse, Vehicule, Personne } from '../models';
import { timeInterval } from 'rxjs/operators';

@Pipe({
  name: 'historique'
})
export class HistoriquePipe implements PipeTransform {
  transform(value: Annonce, args?: any): Annonce {
    let dateNow:Date = new Date();
    let dateAnnonce:Date = new Date(value.heure);

    if (dateNow.getTime() > dateAnnonce.getTime()) {
      return (value);
    }
  }
}

@Pipe({
  name: 'reservation'
})
export class ReservationPipe implements PipeTransform {
  transform(value: Annonce, args?: any): Annonce {
    let dateNow:Date = new Date();
    let dateAnnonce:Date = new Date(value.heure);

    if (dateNow.getTime() < dateAnnonce.getTime()) {
      return (value);
    }
  }
}
