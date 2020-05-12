import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-purchase-address',
  templateUrl: './purchase-address.component.html',
  styleUrls: ['./purchase-address.component.css']
})
export class AddressComponent implements OnInit {

  constructor() {}

  @Input() purchaseForm: FormGroup;

  ngOnInit() {}

  onClickNext() {
    console.log('onClickNext(): ');
    this.purchaseForm.get('addressDetails').get('name').markAsTouched();
    this.purchaseForm.get('addressDetails').get('name').updateValueAndValidity();
    this.purchaseForm.get('addressDetails').get('street').markAsTouched();
    this.purchaseForm.get('addressDetails').get('street').updateValueAndValidity();
    this.purchaseForm.get('addressDetails').get('city').markAsTouched();
    this.purchaseForm.get('addressDetails').get('city').updateValueAndValidity();
    this.purchaseForm.get('addressDetails').get('province').markAsTouched();
    this.purchaseForm.get('addressDetails').get('province').updateValueAndValidity();
    this.purchaseForm.get('addressDetails').get('country').markAsTouched();
    this.purchaseForm.get('addressDetails').get('country').updateValueAndValidity();
    this.purchaseForm.get('addressDetails').get('email').markAsTouched();
    this.purchaseForm.get('addressDetails').get('email').updateValueAndValidity();
  }
}