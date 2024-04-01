import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/user';
import { log } from 'node:console';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  cartQuantity = 0;
  user!: User;
  constructor(cartServices: CartService, private userservice: UserService) {
    cartServices.getCartObservable().subscribe((data) => {
      this.cartQuantity = data.totalCount;
    });
    userservice.userObservable.subscribe((newUSer) => {
      this.user = newUSer;
    });
  }

  logout() {
    this.userservice.logout();
  }
  get isAuth() {
    return this.user.token;
  }
}
