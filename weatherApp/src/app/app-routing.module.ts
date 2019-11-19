import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigateComponent } from './components/navigate/navigate.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FavoritesComponent } from './components/favorites/favorites.component';


const routes: Routes = [
  {path: '', component: DashboardComponent,  pathMatch: 'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'favorites', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
