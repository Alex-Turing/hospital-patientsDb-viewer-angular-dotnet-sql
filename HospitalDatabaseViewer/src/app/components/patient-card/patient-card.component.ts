import { Component, Input } from '@angular/core';
import { IPatient } from '../../services/api-patients.service';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent {
  @Input() patient?: IPatient;
}
