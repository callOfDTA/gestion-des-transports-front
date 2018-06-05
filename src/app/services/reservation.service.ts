import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Annonce, Reservation} from "../models";
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
const API_URL = environment.apiUrl;

@Injectable()
export class ReservationService {

  constructor(private _http:HttpClient) { }

  lister(matricule:string):Observable<Annonce[]> {
    return this._http.get<Annonce[]>(`${API_URL}/annonces/passager/${matricule}`);
  }

  publierAnnonce(annonce:Annonce): Observable<Annonce> {
    return this._http.post<Annonce>(`${API_URL}/annonces`, annonce);
  }

  reserver(reservation:Reservation):Observable<Annonce> {
    return this._http.post<Annonce>(`${API_URL}/annonces/passager`, reservation);
  }
}
