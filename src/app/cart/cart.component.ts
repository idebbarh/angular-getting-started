import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems = this.cart.getItems()
  totalPrice = this.cartItems.reduce((acc,curItem)=>acc+curItem.price,0)
  checkoutForm = this.formBuilder.group({
    name:"",
    address:""
  })
  constructor(private cart : CartService,private formBuilder : FormBuilder){}

  onSubmit(){
    this.cart.clearCart()
    this.cartItems = this.cart.getItems()
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset()
  }
}
