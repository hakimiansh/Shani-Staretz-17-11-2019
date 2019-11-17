import { Injectable } from '@angular/core';
import { topCitiesesUrl, apiKey, currentCityConditions } from 'src/app/modules/endpoint';
import { City } from 'src/app/modules/city';

import { Day } from 'src/app/modules/day';

import { ICONS } from 'src/assets/weatherIcons';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  citiesUrl: string;
  cities:City[];

  constructor() {
    this.cities = new Array();
    this.citiesUrl = `${topCitiesesUrl}apikey=${apiKey}`;
  }

  async getCities() {
    
    try {
      const response = await fetch(this.citiesUrl);
    
      const data = await response.json();
      for (const k in data) {
        if (data.hasOwnProperty(k)) {
          
          this.cities[k]={cityId: data[k].Key,
                cityName: data[k].LocalizedName,
            //     // today: await this.getCity(myData[i].Key),
                today: null,
                weekDays: null}

        }
       
      }
      
      return this.cities;
     
    } catch (err) {
      console.error(err);
      return null
    }

  }

  async getCurrentCityWeather(id: string): Promise<Day> {

    var url = `${currentCityConditions}${id}?apikey=${apiKey}`;
    try {
      
      const response = await fetch(url)
  
      const data = await response.json();
      
      // day = this.readCity(data);
      var day:Day = {
        date: data[0].LocalObservationDateTime,
        degree: { celsius: data[0].Temperature.Metric.Value, 
                  fahrenheit: data[0].Temperature.Imperial.Value },
                  logoUrl: this.getLogoURL(data[0].WeatherIcon),
        
      }
      
      return day;
    } catch (error) {

    }
    return day;

  }
  readCity(myData): Day {
    
    return {
      degree: { celsius: myData.Temperature.Metric.Value, 
                fahrenheit: myData.Temperature.Imperial.Value },
                logoUrl: this.getLogoURL(myData.WeatherIcon),
      date: myData.LocalObservationDateTime
    }
  }
  getLogoURL(weatherIcon): string {
    
    let res=ICONS.find(obj=>obj.icon_id===weatherIcon);
   
    return res.imgSrc;
  }



}
