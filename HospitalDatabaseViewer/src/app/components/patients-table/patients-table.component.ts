import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPatient } from '../../services/api-patients.service';

@Component({
  selector: 'app-patients-table',
  templateUrl: './patients-table.component.html',
  styleUrls: ['./patients-table.component.css']
})
export class PatientsTableComponent {
  @Input() patients?: IPatient[];
  @Output() deletePatientEvent = new EventEmitter<number>();

  deletePatient(patientId: number) {
    this.deletePatientEvent.emit(patientId);
  }
}
