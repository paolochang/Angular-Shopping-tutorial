import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  // itemsTotal: number;
  // shippingCost: number;
  // finalTotal: number;
  // checkoutForm;

  constructor(
    private cartService: CartService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    // this.itemsTotal = this.cartService.getItemsTotal();
    // this.shippingCost = this.cartService.getShippingCost();
    // this.finalTotal = this.cartService.getFinalTotal();
    // this.shppingCost = this.cartService.getShippingCost();
    // if (this.shppingCost) {
    //   window.console.log("Shipping changed: ");
    //   this.shppingCost = this.cartService.getShippingCost();
    // }
  }


  onFormValidation(customerData) {
    let isValid = this.onDataValidation('name', customerData.name);
    isValid = isValid && this.onDataValidation('street', customerData.street);
    isValid = isValid && this.onDataValidation('city', customerData.city);
    isValid = isValid && this.onDataValidation('province', customerData.province);
    isValid = isValid && this.onDataValidation('country', customerData.country);

    // window.alert("name: " + customerData.name + 
    //             "\nstreet: " + customerData.street + 
    //             "\ncity: " + customerData.city + 
    //             "\nprovince: " + customerData.province + 
    //             "\ncountry: " + customerData.country +
    //             "\nisValid: " + isValid);
    
    return isValid;
  }

  onDataValidation(key, value) {
    let isValid = true;
    switch(key) {
      case 'name':
        if (value == '') isValid = false;
        break;
      case 'street':
        if (value == '') isValid = false;
        break;
      case 'city':
        if (value == '') isValid = false;
        break;
      case 'province':
        if (value == '') isValid = false;
        break;
      case 'country':
        if (value == '') isValid = false;
        break;
    }
    return isValid;
  }

  onSubmit(customerData) {
    // Process checkout data here
    if (this.onFormValidation(customerData)) { 
      this.items = this.cartService.clearCart();
      // this.checkoutForm.reset();
      this.router.navigate(['/']);

      // console.warn('Your order has been submitted', customerData);
      this.toastr.success('Your order has been submitted', '', { timeOut: 2000 });
    }
    else {
      this.toastr.warning('Please complete shipping information.', '', { timeOut: 2000 });
    }

  }
}