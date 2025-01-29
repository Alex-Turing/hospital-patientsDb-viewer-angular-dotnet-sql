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
import { PatientsTableComponent } from './components/patients-table/patients-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientsComponent,
    NewPatientComponent,
    PatientDetailsComponent,
    PatientCardComponent,
    PatientsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
