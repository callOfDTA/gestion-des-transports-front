import { Pipe, PipeTransform } from '@angular/core';
import { Vehicule, Personne, Adresse } from '../models';

@Pipe({
  name: 'vehicule'
})
export class VehiculePipe implements PipeTransform {

  transform(value: Vehicule, args?: any): any {
    return `${value.marque} - ${value.modele}`;;
  }

}

@Pipe({
  name: 'personne'
})
export class PersonnePipe implements PipeTransform {

  transform(value: Personne, args?: any): any {
    return `${value.prenom} - ${value.nom}`;
  }

}

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let date = new Date(value);
    return `${date.getHours()}h:${date.getMinutes()}min - ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  }

}

@Pipe({
  name: 'adresse'
})
export class AdressePipe implements PipeTransform {

  transform(value: Adresse, args?: any): string {
    return `${value.rue} ${value.ville},${value.codePostal}`;
  }

}