import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Rental } from "./rental.model";


@Injectable()
export class RentalService {

    private rentals: Rental[] = [
        {
        id:"1",
        title: "Central Apartment",
        city: "New York",
        street: "Times Square",
        category: "apartment",
        image: "http://placekitten.com/200/300",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "12/24/2022"
      },
      {
        id:"2",
        title: "Central Apartment",
        city: "New York City",
        street: "Times Square",
        category: "apartment",
        image: "http://placekitten.com/200/300",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "12/24/2022"
      },
      {
        id:"3",
        title: "Central Apartment",
        city: "San Francisco",
        street: "Times Square",
        category: "apartment",
        image: "http://placekitten.com/200/300",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "12/24/2022"
      },
      {
        id:"4",
        title: "Central Apartment",
        city: "Chicago",
        street: "Times Square",
        category: "apartment",
        image: "http://placekitten.com/200/300",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "12/24/2022"
      },
    ]

    public getRentalById(rentalId: string): Observable<Rental> {
      return new Observable<Rental>((observer) => {
        setTimeout(()=> {
          const foundRental = this.rentals.find((rental) => {
            return rental.id == rentalId
          });

          observer.next(foundRental);
        }, 10);
      });
    }

    public getRentals(): Observable<Rental[]> {
      
      return new Observable<Rental[]>((observer) => {
        setTimeout(() => {
          
          observer.next(this.rentals);
        }, 10);
      });
    }
}