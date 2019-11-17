import { Injectable } from '@angular/core';
import { topCitiesesUrl, apiKey, currentCityConditions } from 'src/app/modules/endpoint';
import { City } from 'src/app/modules/city';
import { ConstantPool } from '@angular/compiler';
import { WeekDay } from '@angular/common';
import { Day } from 'src/app/modules/day';
import { ConcatSource } from 'webpack-sources';
import { ICONS } from 'src/assets/weatherIcons';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  citiesUrl: string;
  

  constructor() {
    // this.cities = new Array();
    this.citiesUrl = `${topCitiesesUrl}apikey=${apiKey}`;
  }

  async getCities() : Promise<City[]>{
    const cities: City[]=new Array( );
    try {
      const response = await fetch(this.citiesUrl)
      .then((response) => {
      const data = response.json()
      .then((data) => {
      
      for (let i = 0; i < data.length; i++) 
      {
        cities[i] = {
          cityId: data[i].Key,
          cityName: data[i].LocalizedName,
          // today: await this.getCity(myData[i].Key),
          today: null,
          weekDays: null
        };
      }

      
      });
      console.log("1. cities",cities);
      console.log("1. cities type ",typeof(cities));
      return cities;
  
    });
      
    
      // return Promise.resolve(cities);
    } catch (err) {
      console.error(err);
      return null
    }

  }

  // async readCities(myData) {
    
  //   console.log("readCities");
  //   for (let i = 0; i < myData.length; i++) {
  //     this.cities[i] = {
  //       cityId: myData[i].Key,
  //       cityName: myData[i].LocalizedName,
  //       // today: await this.getCity(myData[i].Key),
  //       today: null,
  //       weekDays: null
  //     };

  //   }
  // }
  async getCity(id: string): Promise<Day> {

    var url = `${currentCityConditions}${id}?apikey=${apiKey}`;
    try {
      console.log("getCity");
      const response = await fetch(url)
  
      console.log("response",response);
      const data = await response.json();
      console.log("data",data);
      // day = this.readCity(data);
      var day = {
        date: data[0].LocalObservationDateTime,
        degree: { celsius: data[0].Temperature.Metric.Value, 
                  fahrenheit: data[0].Temperature.Imperial.Value },
                  logoUrl: this.getLogoURL(data[0].WeatherIcon),
        
      }
      console.log("day: ",day.date);
      return day;
    } catch (error) {

    }
    return day;

  }
  readCity(myData): Day {
    
    console.log("readCity");
    console.log("myData: ",myData);
    return {
      degree: { celsius: myData.Temperature.Metric.Value, 
                fahrenheit: myData.Temperature.Imperial.Value },
                logoUrl: this.getLogoURL(myData.WeatherIcon),
      date: myData.LocalObservationDateTime
    }
  }
  getLogoURL(weatherIcon): string {
    // console.log("getLogoURLweatherIcon", weatherIcon);
    // console.log("getLogoURLweathertype", typeof(weatherIcon));
    
   
    let res=ICONS.find(obj=>obj.icon_id===weatherIcon);
     console.log("res",res);
    return res.imgSrc;
  }



}
