import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { PatientDetailsComponent } from './pages/patient-details/patient-details.component';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'patients/:id', component: PatientDetailsComponent },
  { path: 'patient-form', component: NewPatientComponent },
  { path: '**', redirectTo: '', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
