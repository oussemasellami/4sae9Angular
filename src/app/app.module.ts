import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponent } from './residences/residences.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { CardresidenceComponent } from './cardresidence/cardresidence.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowappartComponent } from './showappart/showappart.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ListannonceComponent } from './annonce/listannonce/listannonce.component';
import { AnnonceRoutingModule } from './annonce/annonce-routing.module';
import { AnnonceModule } from './annonce/annonce.module';
import { FormappartComponent } from './formappart/formappart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResidencesComponent,
    FooterComponent,
    CardresidenceComponent,
    PagenotfoundComponent,
    ShowappartComponent,
    FormappartComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AnnonceModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
