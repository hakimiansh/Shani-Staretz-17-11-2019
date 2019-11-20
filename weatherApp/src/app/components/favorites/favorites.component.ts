import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/modules/city';
import { CitiesService } from 'src/services/cities.service';
import { CityShort } from 'src/app/modules/cityShort';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})


export class FavoritesComponent implements OnInit {
  favorites: City[];
  favoritesIds: CityShort[];
  toggleButtonText: string
  celsius: boolean;

  constructor(private citiesService: CitiesService) {
    this.favoritesIds = [];
    this.favorites = [];
    this.celsius = true;
    this.toggleButtonText = '\xB0F' + '/' + '\xB0C';
  }

  ngOnInit() {

    this.favoritesIds = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log("favoritesIds: ", this.favoritesIds);

    for (let i = 0; i < this.favoritesIds.length; i++) {
      var c = { id: this.favoritesIds[i].id }
      let cityID = this.favoritesIds[i].id;
      let cityName = this.favoritesIds[i].name;
      this.citiesService.getCurrentCityWeather(cityID)
        .then(day => {
          var city: City = {
            cityId: cityID,
            cityName: cityName,
            today: day,
            weekDays: null
          }
          this.favorites.push(city);
        });
    }
  }

  goToCity(id: string) {
    window.location.href = "http://localhost:4200/dashboard/id:" + id;
  }

  toggleDegree() {
    this.celsius = !this.celsius;
  }
}
