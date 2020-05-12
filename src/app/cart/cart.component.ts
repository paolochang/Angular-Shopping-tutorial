import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  cartTotal;

  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.cartTotal = this.cartService.getCartTotal();
    console.log(this.cartTotal)
  }

  onAddButton(product) {
    this.cartService.addItemQuantity(product);
    this.cartTotal = this.cartService.getCartTotal();
  }

  onRemoveButton(product) {
    this.cartService.removeItemQuantity(product);
    this.cartTotal = this.cartService.getCartTotal();
  }
}