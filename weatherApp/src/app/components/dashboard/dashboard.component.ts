import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/modules/city';
import { CitiesService } from 'src/services/cities.service';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { Day } from 'src/app/modules/day';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  currentCity: City;

  keyword = 'name';
  data = [
    {
      id: "215854",
      name: ' Tel Aviv'
    }
  ];

  constructor(private citiesService: CitiesService) {
    this.currentCity = {
      cityId: "215854",
      cityName: "Tel Aviv",
      today: {
        date: null,
        dayName:"",
        weatherText:"",
        degree: {
          celsius: null,
          fahrenheit: null
        },
        logoUrl: null
      },
      weekDays: null
    }
  }

  ngOnInit() {

  }

  async getAutocompleteCity(cityName: string) {
    var searchResults = []
    this.citiesService.getAutocompleteCity(cityName)
      .then(results => {
        for (const index in results) {
          if (results.hasOwnProperty(index)) {
            const city = results[index];
            searchResults.push({ id: city.cityId, name: city.cityName });

          }
        }

        // console.log("searchResults",searchResults);
      });
    return searchResults;
  }

  // async getCurrentCityWeather(cityID:string){

  //   console.log("cityID",cityID);
  //   let results:Day;
  //   this.citiesService.getCurrentCityWeather(cityID)
  //   .then(weatherResults=>{
  //     console.log("weatherResults", weatherResults);
  //     return weatherResults;
  //     // this.currentCity.today=d;
  //   });
  //   // this.getforecasts(cityID);
  //   // return results;
  // }

  getforecasts(cityID:string){
    this.citiesService.getforecasts(cityID)
    .then(d=>{
      this.currentCity.weekDays=d;
      // console.log("weekdays",d);
      // console.log("this.currentCity",this.currentCity)
    });
  }



  async selectEvent(item) {
    // console.log("item:", item);
    // console.log( this.currentCity);
    this.currentCity.cityName = item.name;
    this.currentCity.cityId = item.id;

    this.citiesService.getCurrentCityWeather(item.id)
      .then(weatherResults => {
       
        this.currentCity.today = weatherResults;
        // console.log(this.currentCity.today.logoUrl);
      });
      
      this.citiesService.getforecasts(item.id)
      .then(weekDays=>{
        this.currentCity.weekDays=weekDays;
        // console.log("weekdays",d);
        // console.log("this.currentCity",this.currentCity)
      });

    //  await this.getCurrentCityWeather(item.id)  
    //   .then(data => {
    //     // this.cities=data;
    //     console.log("data: ",data);
    //     // console.log("cities: ",this.cities);
    //   });
    // console.log("results",(results));
    // this.currentCity.today=results;

  }

  async onChangeSearch(val: string) {
    var searchResults = [];
    searchResults = await this.getAutocompleteCity(val);
    this.data = searchResults;
  }

  onFocused(e) {
    // do something when input is focused
  }


}
