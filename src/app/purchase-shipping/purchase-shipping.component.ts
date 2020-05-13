import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ShippingService } from '../purchase-shipping.service';

@Component({
  selector: 'app-purchase-shipping',
  templateUrl: './purchase-shipping.component.html',
  styleUrls: ['./purchase-shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;

  constructor(
    private shippingService: ShippingService,
  ) { }

  @Input() purchaseForm: FormGroup;

  ngOnInit() {
    this.shippingCosts = this.shippingService.getShippingCostReference();
  }

  selectShippingCost(shipping) {
    console.log('selectShippingCost(shipping): ' + shipping.price);
    this.shippingService.setShippingCost(shipping.price);
  }

  onClickNext() {
    console.log('onClickNext(): ' + this.shippingService.getShippingCost());
    this.purchaseForm.get('shippingOptions').get('shipping').markAsTouched();
    this.purchaseForm.get('shippingOptions').get('shipping').updateValueAndValidity();
  }
}