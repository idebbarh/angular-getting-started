import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {OnInit} from "@angular/core"
import { CartService } from '../cart.service';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<{type:string,price:number}[]>
  constructor(private cart: CartService){}
  ngOnInit(){
    this.shippingCosts = this.cart.getShippingPrices()
  }
}
