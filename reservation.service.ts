import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  flightUrl:string = "http://localhost:3122/flightservices/flights";
  reservationUrl:string = "http://localhost:8080/flightservices/reservations";
  flightData:any;
  constructor(private _http:Http) { }

  public getFlights(from:string,to:string,departureDate:string):any{
    return this._http.get(this.flightUrl+"?from="+from+"&to="+to+"&departureDate="+departureDate)
    .pipe(
      map(res=>{
        this.flightData = res.json();
      })
    )
  }
  public getFlight(id:number):any{
    return this._http.get(this.flightUrl+"/"+id).pipe(
      map(
        res=>{
          return res.json();
        }
      )
    )
  }
  public saveReservation(reservation):any{
    return this._http.post(this.reservationUrl,reservation).pipe(
      map(res=>{
        return res.json();
      },
      err=>{
        console.error(err)
      }
    )
    )
  }
}
