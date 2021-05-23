import { ProduitServService } from './../service/produit-serv.service';
import { Component, Input, OnInit } from '@angular/core';
import { panier } from 'src/environments/environment';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() nom:string = "Stylo";
  @Input() prix:number = 1000;
  quantite = 1;


  constructor(private prodServ:ProduitServService) { }

  ngOnInit(): void {
  }

  changeCost(prix:any){
    this.prix = prix;
    console.log(this);
  }

  getBackGround(){
    if(this.prix>12)
      return '#383833';
    else
      return 'green';
  }

  getPrix(){
    return this.prix+' Ariary';
  }

  addToCard(){
    this.prodServ.ajouterProduit(this);
    console.log("Ajout reussi");
    console.log(panier);
  }
}
