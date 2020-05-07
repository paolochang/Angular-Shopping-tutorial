import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  // itemsTotal: number = 0;
  // shippingCost: number = 0;
  // finalTotal: number = 0;

  constructor() {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    // this.itemsTotal = 0;
    // this.shippingCost = 0;
    // this.finalTotal = 0;
    return this.items;
  }
}