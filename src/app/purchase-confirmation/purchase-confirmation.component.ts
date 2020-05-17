import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CartService } from '../cart.service';
import { ShippingService } from '../purchase-shipping.service';

@Component({
  selector: 'app-purchase-confirmation',
  templateUrl: './purchase-confirmation.component.html',
  styleUrls: ['./purchase-confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  items;
  cartTotal: number;
  shippingCost: number;
  grandTotal: number;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private cartService: CartService,
    private shippingService: ShippingService,
  ) { }

  @Input() purchaseForm: FormGroup;

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.cartTotal = parseFloat(this.cartService.getCartTotal());
    this.shippingCost = this.shippingService.getShippingCost();
    this.grandTotal = this.cartTotal + this.shippingCost;
  }

  onSubmit() {
    this.router.navigate(['/']);
    this.toastr.success("Your order has been purchased.", '', {timeOut: 1800});
    this.clearCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.shippingService.clearSelectedShipping();
    this.cartTotal = 0;
    this.grandTotal = 0;
  }
}
