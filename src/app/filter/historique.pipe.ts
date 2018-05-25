import { Pipe, PipeTransform } from '@angular/core';
import { Annonce } from '../models';

@Pipe({
  name: 'historique'
})
export class HistoriquePipe implements PipeTransform {

  transform(value: Annonce, args?: any): Annonce {
    let dateNow = Date.now();
    if (dateNow > value.heure.getTime()) {
      return (value);
    }
  }
}

@Pipe({
  name: 'reservation'
})
export class ReservationPipe implements PipeTransform {
  transform(value: Annonce, args?: any): Annonce {
    let dateNow = Date.now();
    if (dateNow < value.heure.getTime()) {
      return (value);
    }
  }
}
