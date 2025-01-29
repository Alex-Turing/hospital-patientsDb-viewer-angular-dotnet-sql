import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientDetailsComponent } from './pages/patient-details/patient-details.component';
import { RouterLink } from '@angular/router';
import { PatientCardComponent } from './components/patient-card/patient-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientsComponent,
    NewPatientComponent,
    PatientDetailsComponent,
    PatientCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
