import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';
import { NgPipesModule } from 'ngx-pipes';

@Component({
  selector: 'bwm-rental-detail',
  standalone: true,
  imports: [CommonModule, NgPipesModule],
  templateUrl: './rental-detail.component.html',
  styleUrl: './rental-detail.component.scss'
})


export class RentalDetailComponent implements OnInit {
  private routeData: any;
  rental!: Rental;
  constructor(private route: ActivatedRoute, private rentalService: RentalService) {}

   ngOnInit() {
    console.log('testing')
    this.getRental(this.route.snapshot.params['rentalId']).then(event => this.rental = event)
  }

   getRental(rentalId: string)  {
    return this.rentalService.getRentalById(rentalId)
  }
}
