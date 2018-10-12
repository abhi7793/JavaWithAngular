import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FindFlightsComponent } from './components/find-flights/find-flights.component';
import { DisplayFlightsComponent } from './components/display-flights/display-flights.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { AppRouterModule } from './routing.module';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { ReservationService } from './services/reservation.service';

@NgModule({
  declarations: [
    AppComponent,
    FindFlightsComponent,
    DisplayFlightsComponent,
    PassengerDetailsComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouterModule,
    FormsModule
  ],
  providers: [ReservationService],
  bootstrap: [FindFlightsComponent]
})
export class AppModule { }
