/**
 * Class that will send out the direct API requests to the DB server
 */

import { Injectable } from "@angular/core";
import { Rental } from "./rental.model";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class RentalService {

    results: any;

    constructor(private http: HttpClient) {}
    /**  Returns a rental given a specific ID*/
    public getRentalById(rentalId: string) {
      const req = this.http.get('/api/v1/rentals/' + rentalId)
      req.subscribe((response) => {
        this.results = response;
      });
      let JSONString = JSON.stringify(this.results)
      let JSONObject = JSON.parse(JSONString)

      return JSONObject.data;
    }
    /**  Returns all the rentals */
    public getRentals()  {
      const req = this.http.get('/api/v1/rentals/')
      req.subscribe((response) => {
        this.results = response;
      });
      let JSONString = JSON.stringify(this.results)
      let JSONObject = JSON.parse(JSONString)

      return JSONObject.data;
    }
}