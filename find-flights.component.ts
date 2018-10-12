import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-find-flights',
  templateUrl: './find-flights.component.html',
  styleUrls: ['./find-flights.component.css']
})
export class FindFlightsComponent implements OnInit {

  constructor(private service:ReservationService,private router:Router) { }

  ngOnInit() {
  }
  public onSubmit(data){
    console.log(data.from)
    this.service.getFlights(data.from,data.to,data.departureDate).subscribe(
      res=>{
        this.router.navigate(['/displayFlights'])
      }
    )
  }
}
