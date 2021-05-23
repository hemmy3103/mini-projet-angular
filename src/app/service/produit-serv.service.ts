import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitServService {
  panier = Array();

  constructor() { }

  supprimerProduit(produit:any){
    let panierFind = this.panier.find((prod) => prod.nom === produit.nom)
    if(panierFind){
      panierFind.quantite--;
      if(panierFind.quantite < 0){
        this.panier = this.panier.filter(p => p.nom !== produit.nom)
        console.log(this.panier);
      }
    }

  }

  ajouterProduit(produit: any){
    let panierFind = this.panier.find((prod) => prod.nom === produit.nom)
    if(!panierFind)
      this.panier.push(produit);
    else{
      panierFind.quantite++;
    }
  }
}
