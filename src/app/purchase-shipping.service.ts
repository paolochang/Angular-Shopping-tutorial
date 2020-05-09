import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  items = [];
  itemsTotal: number = 0;
  shippingCost: number = 0;
  finalTotal: number = 0;

  constructor(
    private http: HttpClient
  ) {}

  getShippingCostReference() {
    return this.http.get('/assets/shipping.json');
  }

  getShippingCost() {
    return this.shippingCost;
  }

  setShippingCost(shippingCost) {
    this.shippingCost = shippingCost;
  }
}