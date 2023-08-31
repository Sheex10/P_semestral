import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  acum: any;
  constructor(private router: Router, private menuCtrl: MenuController) { }

  ngOnInit() {
  this.acum = [
    {
      "img" : "https://www.amigales.cl/media/catalog/product/cache/e41c4201e1eb7e3f60e4abbd62ba2679/c/a/cama_oval.jpg",
      "tittle" : "Cama Perro",
      "precio" : "$29.990"
    },
    {
      "img" : "https://d2r9epyceweg5n.cloudfront.net/stores/120/791/products/119-comedero-inoxidable-para-perros-21-4e8921374258d7a05715122104378126-640-0.jpg",
      "tittle" : "Comedero Gato",
      "precio" : "$12.990"
    },
    {
      "img" : "https://m.media-amazon.com/images/I/41c9taryhSL._SL500_.jpg",
      "tittle" : "Comedero Perro",
      "precio" : "$12.990"
    },
    {
      "img" : "https://veterinariaelabrazo.cl/cdn/shop/products/Cama_felpa_morada_perro_gato_600x_15572b3f-1861-4342-88f3-0680b3f53048_800x.jpg?v=1630958717",
      "tittle" : "Cama Gato",
      "precio" : "$29.990"
    },
  ]
  }
  
  
}
