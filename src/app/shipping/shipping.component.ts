import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;

  constructor(
    private cartService: CartService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingCostReference();
  }

  setShippingCost(shippingCost) {
    window.console.log(shippingCost);
    this.cartService.setShippingCost(shippingCost);
    this.router.navigate(['/cart']);
  }

}