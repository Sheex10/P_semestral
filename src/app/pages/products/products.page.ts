import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    // Agrega más productos según sea necesario
  ];
  constructor(private cartService: CartService) { }
  
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
  
  ngOnInit() {
  }


}
