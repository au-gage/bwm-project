/**
 * Class that will send out the direct API requests to the DB server
 */

import { Injectable } from "@angular/core";
import { Rental } from "./rental.model";
import { lastValueFrom,firstValueFrom } from 'rxjs';
import { HttpClient } from "@angular/common/http";


@Injectable()
export class RentalService {

    results: any;

    constructor(private http: HttpClient) {}
    /**  Returns a rental given a specific ID*/
    public async getRentalById(rentalId: string) {
      console.log(rentalId)
      const response = await firstValueFrom(this.http.get('/api/v1/rentals/' + rentalId))
      this.results = response;
      if(this.results) {
        return this.results.data[0];
      }
      return null;

    }
    /**  Returns all the rentals */
    public getRentals()  {
      const req = this.http.get('/api/v1/rentals/')
      req.subscribe((response) => {
        this.results = response;
      console.log(this.results)
      });
      if(this.results) {
        return this.results.data;
      }
      return null;
      
    }
}