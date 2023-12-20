import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalListItemComponent } from '../rental-list-item/rental-list-item.component';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';



@Component({
  selector: 'bwm-rental-list',
  standalone: true,
  imports: [CommonModule,RentalListItemComponent],
  templateUrl: './rental-list.component.html',
  styleUrl: './rental-list.component.scss'
})
export class RentalListComponent {
  rentals: Rental[] = []

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    
    const rentalObservable = this.rentalService.getRentals();

    rentalObservable.subscribe(
      (rentals: Rental[]) => {
        
        this.rentals = rentals;
        
      },
      (err: any) => {
        
      },
      () => {
        
      });
  }
}
