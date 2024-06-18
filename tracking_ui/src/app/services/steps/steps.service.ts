import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Step } from '../../models/step';

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  private apiUrl = 'http://localhost:8080/steps';

  constructor(private http: HttpClient) { }

  getStepsByFormationId(formationId: number): Observable<Step[]> {
    return this.http.get<Step[]>(`${this.apiUrl}?formationId=${formationId}`);
  }

  saveStep(step: Step): Observable<Step> {
    return this.http.post<Step>(this.apiUrl, step);
  }
}