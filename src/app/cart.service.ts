import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  itemsTotal: number = 0;
  shippingCost: number = 0;
  finalTotal: number = 0;

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

  getShippingCostReference() {
    return this.http.get('/assets/shipping.json');
  }

  getShippingCost() {
    return this.shippingCost;
  }

  setShippingCost(shippingCost) {
    this.shippingCost = shippingCost;
  }
  
  getFinalTotal() {
    this.finalTotal = this.itemsTotal + this.shippingCost;
    return this.finalTotal;
  }

  clearCart() {
    this.items = [];
    this.itemsTotal = 0;
    this.shippingCost = 0;
    this.finalTotal = 0;
    return this.items;
  }
}