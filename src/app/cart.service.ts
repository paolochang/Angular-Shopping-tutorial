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
    if (this.items.find(obj => obj.name == product.name)) {
      this.addItemQuantity(product);
    }
    else {
      product.quantity = 1;
      this.items.push(product);
    }
  }

  getItems() {
    return this.items;
  }

  getNumOfItems() {
    let count: number = 0
    this.items.forEach(item => count += item.quantity)
    return count;
  }

  addItemQuantity(product) {
    let index = this.items.findIndex(obj => obj.name == product.name);
    this.items[index].quantity += 1;
  }

  removeItemQuantity(product) {
    let index = this.items.findIndex(obj => obj.name == product.name);
    this.items[index].quantity -= 1;
    if (this.items[index].quantity == 0) {
      this.items.splice(index, 1);
    }
  }

  getCartTotal() {
    let cartTotal: number = 0;
    this.items.forEach(item => cartTotal += (item.price * item.quantity));
    return cartTotal.toFixed(2);
  }

  clearCart() {
    this.items = [];
    // this.itemsTotal = 0;
    // this.shippingCost = 0;
    // this.finalTotal = 0;
    return this.items;
  }
}