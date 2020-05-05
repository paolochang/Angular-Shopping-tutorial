import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { totalmem } from 'os';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  itemsTotal = 0;
  shipping = 0;
  finalTotal = 0;

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getItemsTotal() {
    let total : number = 0;
    this.items.forEach(function(item) {
      total += item.price;
    })

    this.itemsTotal = total;
    return this.itemsTotal;
  }

  getFinalTotal() {
    this.finalTotal = this.itemsTotal + this.shipping;
    return this.finalTotal;
  }

  clearCart() {
    this.items = [];
    this.itemsTotal = 0;
    this.shipping = 0;
    this.finalTotal = 0;
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  getShipping() {
    return this.shipping;
  }

  setShipping(shipping) {
    this.shipping = shipping;
  }
}