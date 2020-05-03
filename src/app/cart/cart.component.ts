import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      street: '',
      city: '',
      province: '',
      country: ''
    });
   }

  ngOnInit() {
    this.items = this.cartService.getItems();
    window.alert(this.items.length);
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
      this.checkoutForm.reset();
      this.router.navigate(['/']);

      console.warn('Your order has been submitted', customerData);
    }

  }
}