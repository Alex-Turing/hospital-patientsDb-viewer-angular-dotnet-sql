import { Component, OnInit } from '@angular/core';
import { ApiPatientsService, IPatient } from '../../services/api-patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css'
})
export class PatientsComponent implements OnInit{
  
  patients: IPatient[] = [];

  constructor(private _apiService: ApiPatientsService) { }

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients() {
    this._apiService.getPatients().subscribe(data => {
      this.patients = data;
    })
  }

}
