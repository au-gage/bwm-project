import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'bwm-rental-list-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rental-list-item.component.html',
  styleUrl: './rental-list-item.component.scss'
})
export class RentalListItemComponent {
  @Input() currentRental: any

}
