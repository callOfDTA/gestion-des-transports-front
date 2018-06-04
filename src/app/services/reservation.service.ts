import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Annonce } from "../models";
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
const URL_BACKEND = environment.backendUrl;

@Injectable()
export class ReservationService {

  constructor(private _http:HttpClient) { }

  lister(matricule:string):Observable<Annonce[]> {
    return this._http.get<Annonce[]>(`${URL_BACKEND}/annonces/passager/${matricule}`);
  }

  publierAnnonce(annonce:Annonce): Observable<Annonce> {
    return this._http.post<Annonce>(`${URL_BACKEND}/annonces`, annonce);
  }
}
