import { Component } from '@angular/core';
import { TitleComponent } from "../../partials/title/title.component";
import { Router } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrederItemsListComponent } from '../../partials/oreder-items-list/oreder-items-list.component';
import { TextInputComponent } from '../../partials/text-input/text-input.component';
import { Order } from '../../../shared/models/Order';
import { PaypalButtonComponent } from "../../partials/paypal-button/paypal-button.component";
@Component({
    selector: 'app-payment-page',
    standalone: true,
    templateUrl: './payment-page.component.html',
    styleUrl: './payment-page.component.css',
    imports: [CommonModule, ReactiveFormsModule, TitleComponent, TextInputComponent, OrederItemsListComponent, PaypalButtonComponent]
})
export class PaymentPageComponent {
  order:Order = new Order();
  constructor(orderService: OrderService, router: Router) {
      orderService.getNewOrderForCurrentUser().subscribe({
        next: (order) => {
          this.order = order;
        },
        error:() => {
          router.navigateByUrl('/checkout');
        }
      })

   }
}
