import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalService } from './shared/rental.service';
import { WildCardComponent } from '../wild-card/wild-card.component';

export const routes: Routes = [
  {path: 'rentals', 
  component: RentalComponent,
  children: [
    { path: '', component: RentalListComponent},
    { path: ':rentalId', component: RentalDetailComponent}
  ]
  },
  { path: '',   redirectTo: '/rentals', pathMatch: 'full' },
  {path: '**', component: WildCardComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [RentalService]
})
export class AppRoutingModule { }