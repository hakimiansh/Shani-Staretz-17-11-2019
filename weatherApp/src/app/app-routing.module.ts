import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FavoritesComponent } from './components/favorites/favorites.component';


const routes: Routes = [
  {path: '', component: DashboardComponent,  pathMatch: 'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'favorites', component: FavoritesComponent},
  {path:'dashboard/:id', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
