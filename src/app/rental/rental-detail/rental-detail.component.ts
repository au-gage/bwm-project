import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rental-detail.component.html',
  styleUrl: './rental-detail.component.scss'
})


export class RentalDetailComponent implements OnInit {
  private routeData: any;
  rental!: Rental;
  constructor(private route: ActivatedRoute, private rentalService: RentalService) {}

  ngOnInit() {
    this.getRental(this.route.snapshot.params['rentalId'])
  }

  getRental(rentalId: string) {
    this.rental = this.rentalService.getRentalById(rentalId)
  }
}
