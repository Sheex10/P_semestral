import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  items = [];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }
  ngOnInit() {
  }

}
