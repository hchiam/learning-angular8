import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBreweries() {
    console.log(`Looking for the service? It's working!`);
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
