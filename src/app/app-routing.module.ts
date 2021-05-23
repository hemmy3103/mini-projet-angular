import { ProduitComponent } from './produit/produit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';

const routes: Routes = [
  {   path: '', redirectTo: '/listeProduit', pathMatch: 'full'   },
  {   path:'listeProduit', component: ListeProduitComponent},
  {   path:'panier', component: PanierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
