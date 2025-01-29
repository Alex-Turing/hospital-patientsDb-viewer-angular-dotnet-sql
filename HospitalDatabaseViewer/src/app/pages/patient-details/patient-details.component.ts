import { Component, OnInit } from '@angular/core';
import { ApiPatientsService, IPatient } from '../../services/api-patients.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.css'
})
export class PatientDetailsComponent implements OnInit{

  patientsList?: IPatient[];
  patient!: IPatient;

  constructor(private _route: ActivatedRoute, private _patientService: ApiPatientsService) { }

  ngOnInit(): void {
    this.patient = this.initializePatientObject();
    this.loadPatients()
    
    
  }

  loadPatients() {
    this._route.params.subscribe({
      next: (params: Params) => {
        this.setPatientData(params['id']);
      }
    })
  }

  setPatientData(id:string) {
    this._patientService.getPatientById(Number(id)).subscribe(data => {
      this.patient = data;
    })
  }

  initializePatientObject(): IPatient {
    return {
      patientId: 0,
      firstName: '',
      lastName: '',
      gender: '',
      birthDate: undefined,
      streetAddress: '',
      city: '',
      provinceId: '',
      postalCode: '',
      email: null,
      healthCardNum: null,
      allergies: '',
      patientHeight: 0,
      patientWeight: 0
    }
  }
}
