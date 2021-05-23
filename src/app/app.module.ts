import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { EssaiComponent } from './essai/essai.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PanierComponent } from './panier/panier.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    EssaiComponent,
    NavbarComponent,
    PanierComponent,
    ListeProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
