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
    if (this.items.length == 0) {
      this.http.get('/assets/shipping.json').toPromise().then(data => {
        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            this.items.push(data[key]);
          }
        }
      });
    }
    return this.items;
  }

  getShippingCost() {
    return this.shippingCost;
  }

  setShippingCost(shippingCost) {
    this.shippingCost = shippingCost;
  }
}