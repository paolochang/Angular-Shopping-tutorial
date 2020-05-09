import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';

import { AddressService } from '../purchase-address.service';

@Component({
  selector: 'app-purchase-address',
  templateUrl: './purchase-address.component.html',
  styleUrls: ['./purchase-address.component.css']
})
export class AddressComponent implements OnInit {

  checkoutForm;

  constructor(
    private addressService: AddressService,
    private formBuilder: FormBuilder,
    // private router: Router,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      street: '',
      city: '',
      province: '',
      country: ''
    });
  }

  ngOnInit() {}

  onSubmit(customerData) {
    // Process checkout data here
    // this.router.navigate(['/shipping']);
  }
}