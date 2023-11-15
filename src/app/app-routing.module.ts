import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ResidencesComponent } from './residences/residences.component';
import { CardresidenceComponent } from './cardresidence/cardresidence.component';
import { ShowappartComponent } from './showappart/showappart.component';

const ROUTES:Routes=[
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:"home",component:ResidencesComponent},
  {path:"card",component:CardresidenceComponent},
  {path:"card/showappart/:id",component:ShowappartComponent},
  {path:"**",component:PagenotfoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }