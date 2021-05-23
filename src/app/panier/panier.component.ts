import { ProduitServService } from './../service/produit-serv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  tabProduitPanier = Array();

  constructor(private prodServ:ProduitServService) { }

  ngOnInit(): void {
    this.tabProduitPanier = this.prodServ.panier;
    console.log(this.prodServ.panier);
  }

  supprimer(prodPanier:any){
    this.prodServ.supprimerProduit(prodPanier);
  }
}
