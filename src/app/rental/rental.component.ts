import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalService } from './shared/rental.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [CommonModule,RentalListComponent, RouterModule],
  providers: [RentalService],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.scss'
})
export class RentalComponent {

}
