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
  currentCity:City;
  title = 'weatherApp';

  constructor (private citiesService:CitiesService ){
    this.cities=new Array();
    this.currentCity={cityId:"215854",cityName:"Tel Aviv",today:null,weekDays:null}
  }
  ngOnInit(): void {
    // this.getCities();
    // this.getCurrentCityWeather(this.currentCity.cityId);
    // console.log(this.currentCity);
    // this.getAutocompleteCity(this.currentCity.cityName);
    // this.getforecasts(this.currentCity.cityId);
  }
  getCities(){
       this.citiesService.getTopCities()
      .then(data => {
        this.cities=data;
        // console.log("data: ",data);
        // console.log("cities: ",this.cities);
      });
  }

  getCurrentCityWeather(cityID:string){
    this.citiesService.getCurrentCityWeather(cityID)
    .then(d=>{
      this.currentCity.today=d;
    });
    this.getforecasts(cityID);
  }
  getAutocompleteCity(cityName:string){
    this.citiesService.getAutocompleteCity(cityName)
    .then(d=>{
      ;
      // console.log("d",d);
    });
    
  }

  getforecasts(cityID:string){
    this.citiesService.getforecasts(cityID)
    .then(d=>{
      this.currentCity.weekDays=d;
      // console.log("weekdays",d);
      // console.log("this.currentCity",this.currentCity)
    });
  }

}
