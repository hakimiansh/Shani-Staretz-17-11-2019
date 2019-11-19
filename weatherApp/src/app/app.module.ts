import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigateComponent,
    DashboardComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutocompleteLibModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
