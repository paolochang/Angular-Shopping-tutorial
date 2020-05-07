import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  items = [];
  subTotal: number = 0;
  shippingCost: number = 0;
  finalTotal: number = 0;

  getSubTotal() {
    let total : number = 0;
    this.items.forEach(function(item) {
      total += item.price;
    })

    this.subTotal = total;
    return this.subTotal;
  }
  
  getFinalTotal() {
    this.finalTotal = this.subTotal + this.shippingCost;
    return this.finalTotal;
  }
}