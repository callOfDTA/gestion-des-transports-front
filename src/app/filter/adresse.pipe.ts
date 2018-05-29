import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adresse'
})
export class AdressePipe implements PipeTransform {

  transform(value: any, args?: any): string {
    return `${value.rue} ${value.ville},${value.codePostal}`;
  }

}
