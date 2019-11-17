import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/services/cities.service';
import { City } from './modules/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cities:City[];
  title = 'weatherApp';

  constructor (private citiesService:CitiesService ){}
  ngOnInit(): void {
    // this.getCities();
    this.getCity();
  }
  async getCities(){
      var citiesPromise=await this.citiesService.getCities()
      // .then(data => {
      //   console.log("data: ",data);
      // });
      console.log("2. citiesPromise",citiesPromise);
      console.log("2. citiesPromise",typeof(citiesPromise));
      var cities = Promise.resolve(citiesPromise)
      console.log("2. cities",cities);
      console.log("2. cities",typeof(cities));
  }

  getCity(){
    this.citiesService.getCity("215854")
    .then(d=>console.log("d",d));
    ;
  }
}
