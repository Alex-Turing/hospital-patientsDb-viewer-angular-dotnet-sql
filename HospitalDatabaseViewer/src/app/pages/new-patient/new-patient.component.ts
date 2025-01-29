import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiPatientsService, IPatient } from '../../services/api-patients.service';


@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrl: './new-patient.component.css'
})
export class NewPatientComponent implements OnInit{
  patientForm!: FormGroup;
  newPatient!: IPatient;
  patientsList?: IPatient[] = [];

  constructor(private _formBuilder: FormBuilder, private _patientService: ApiPatientsService) {
    this.patientForm = this._formBuilder.group({
      firstName: [''],
      lastName: [''],
      gender: [''],
      birthDate: [''],
      streetAddress: [''],
      city: [''],
      provinceId: [''],
      postalCode: [''],
      email: [''],
      healthCardNum: [''],
      allergies: [''],
      patientHeight: [''],
      patientWeight: ['']
    });
  }

  ngOnInit(): void {
    //this.newPatient = this.initializeNewPatientObject();
  }

  initializeNewPatientObject():IPatient {
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
      email: '',
      healthCardNum: '',
      allergies: '',
      patientHeight: 0,
      patientWeight: 0,
    }
  }

  submit(event: Event) {
    event.preventDefault();
    this.newPatient = this.patientForm.value;
    console.log(this.newPatient);
    this.createNewPatient(this.newPatient);
  }

  createNewPatient(newPatient: IPatient) {
    this._patientService.addPatient(newPatient).subscribe(() => {
      this.loadPatients();
    })
  }

  loadPatients() {
    this._patientService.getPatients().subscribe(data => {
      this.patientsList = data;
    })
  }
}
