import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface IPatient {
  patientId: number;
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: Date | undefined;
  streetAddress: string;
  city: string;
  provinceId: string;
  postalCode: string;
  email: null | string;
  healthCardNum: null | string;
  allergies: string;
  patientHeight: number;
  patientWeight: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiPatientsService {

  private baseURL = 'https://localhost:7031/api/Patients';

  constructor(private _httpClient: HttpClient) { }

  getPatients(): Observable<IPatient[]> {
    return this._httpClient.get<IPatient[]>(`${this.baseURL}`);
  }

  getPatientById(patientId: number): Observable<IPatient> {
    return this._httpClient.get<IPatient>(`${this.baseURL}/${patientId}`);
  }

  addPatient(patient: IPatient): Observable<IPatient> {
    return this._httpClient.post<IPatient>(this.baseURL, patient);
  }

  editPatient(patient: IPatient): Observable<IPatient> {
    return this._httpClient.put<IPatient>(`${this.baseURL}/${patient.patientId}`, patient);
  }

  deletePatient(patientId: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.baseURL}/${patientId}`);
  }
}
