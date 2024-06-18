import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parcours } from '../../models/parcours';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private apiUrl = 'http://localhost:8080/parcours';

  constructor(private http: HttpClient) { }

  getAllFormations(): Observable<Parcours[]> {
    return this.http.get<Parcours[]>(this.apiUrl);
  }

  getFormationById(id: number): Observable<Parcours> {
    return this.http.get<Parcours>(`${this.apiUrl}/${id}`);
  }

  saveFormation(formation: Parcours): Observable<Parcours> {
    return this.http.post<Parcours>(this.apiUrl, formation);
  }
}
