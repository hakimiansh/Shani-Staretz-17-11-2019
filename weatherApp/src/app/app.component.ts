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
    this.getCities();
    this.getCity(this.currentCity.cityId);
  }
  getCities(){
       this.citiesService.getCities()
      .then(data => {
        this.cities=data;
        // console.log("data: ",data);
        console.log("cities: ",this.cities);
      });
  }

  getCity(cityID:string){
    this.citiesService.getCurrentCityWeather(cityID)
    .then(d=>{
      this.currentCity.today=d;
      console.log("this.currentCity",this.currentCity)});
    ;
  }
}
