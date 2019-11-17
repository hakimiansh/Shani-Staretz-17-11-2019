import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/services/cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'weatherApp';

  constructor (private citiesService:CitiesService ){}
  ngOnInit(): void {
    this.getCities();
  }
  getCities(){
    this.citiesService.getCities();
  }
}
