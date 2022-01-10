import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TravelComponent } from './components/travel/travel.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'travel/:caller',component:TravelComponent
  },
  // {
  //   path:'ticket/:caller/:id',component:TicketComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
