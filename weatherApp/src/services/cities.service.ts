import { Injectable } from '@angular/core';
import { topCityesUrl, apiKey } from 'src/app/modules/endpoint';
import { City } from 'src/app/modules/city';
import { ConstantPool } from '@angular/compiler';
import { WeekDay } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  citiesUrl:string;
  cities:City[];

  constructor() {
    this.cities=new Array();
    this.citiesUrl=`${topCityesUrl}apikey=${apiKey}`;
   }

   async getCities():Promise<City>{
     var myData;
    try{
      const response=await fetch(this.citiesUrl)
      const data=await response.json();
      myData=data;
      console.log(myData);
      this.readCities(myData);
      return data;
    }catch (err) {
      console.error(err);
      return null
    } 

   }


   readCities(myData){
     var temp:City;
     for (let i = 0; i < myData.length; i++) {
      this.cities[i]={cityId:myData[i].Key,cityName:myData[i].LocalizedName,today:null,weekDays:null};
   
       
     }
   }
}
