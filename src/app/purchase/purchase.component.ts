import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor() { }

  purchaseFormGroup: FormGroup;

  ngOnInit(): void {
    
    this.purchaseFormGroup = new FormGroup({
      'shippingOptions': new FormGroup({
        'shipping': new FormControl('', Validators.required),
      }),
      'addressDetails': new FormGroup({
        'name': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]),
        'street': new FormControl('', Validators.required),
        'city': new FormControl('', Validators.required),
        'province': new FormControl('', Validators.required),
        'country': new FormControl('', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'mobile': new FormControl(''),
      })
    })
  }
}
