import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  breweries: Object;

  // you can now use _http throughout our component logic
  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getBreweries().subscribe((data) => {
      this.breweries = data;
      console.log(this.breweries);
    });
  }

}
