import { Component } from '@angular/core';
import  {OnInit} from '@angular/core' 
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  productDetails : Product | undefined
  constructor(private route :ActivatedRoute,private cart:CartService) { }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap
    const productIdFromRoute = Number(routeParams.get("productId"))
    this.productDetails = products.find(product=>product.id === productIdFromRoute)
  }

  addProductToCard(product:Product){
    this.cart.addToCart(product)
    window.alert(product.name + " is added to the cart!!")
    console.log(this.cart.getItems())
  }
}
