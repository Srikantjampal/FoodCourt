import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { TitleComponent } from "../../partials/title/title.component";
import { TextInputComponent } from "../../partials/text-input/text-input.component";
import { OrederItemsListComponent } from "../../partials/oreder-items-list/oreder-items-list.component";
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';
import { log } from 'console';


@Component({
    selector: 'app-checkout-page',
    standalone: true,
    templateUrl: './checkout-page.component.html',
    styleUrl: './checkout-page.component.css',
    imports: [CommonModule, ReactiveFormsModule, TitleComponent, TextInputComponent, OrederItemsListComponent]
})
export class CheckoutPageComponent {

  order:Order = new Order();
  checkoutForm!:FormGroup;

  constructor(cartService:CartService,
    private formBuilder:FormBuilder,
    private userService:UserService,
    private orderService:OrderService,
    private router:Router,
    private toastrService:ToastrService){
      const cart = cartService.getCart();
                this.order.items = cart.items;
                this.order.totalPrice = cart.totalPrice;

    }

    ngOnInit(): void {
      let {name, address} = this.userService.currentUser;
      this.checkoutForm = this.formBuilder.group({
        name:[name, Validators.required],
        address:[address, Validators.required]
      });
    }

    get fc(){
      return this.checkoutForm.controls;
    }

    createOrder(){
      if(this.checkoutForm.invalid){
        this.toastrService.warning('Please fill the inputs', 'Invalid Inputs');
        return;
      }

      // if(!this.order.addressLatLng){
      //   this.toastrService.warning('Please select your location on the map', 'Location');
      //   return;
      // }

      this.order.name = this.fc.name.value;
      this.order.address = this.fc.address.value;
      console.log(this.order);

      this.orderService.create(this.order).subscribe({
        next:() => {
          console.log('hi there order submitted');

        },
        error:(errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Cart');
        }
      })
    }
}
