import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {
  tabProduit = [
    {
      nom:"Gomme",
      prix:12
    },
    {
      nom:"Crayon",
      prix:14
    },
    {
      nom:"Feutre",
      prix:15
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
