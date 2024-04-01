import { CartService } from './../../../services/cart.service';
import { FoodService } from './../../../services/food.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-food-page',
    standalone: true,
    templateUrl: './food-page.component.html',
    styleUrl: './food-page.component.css',
    imports: [RouterModule, NotFoundComponent,CommonModule]
})
export class FoodPageComponent {
  food!: Food;
  constructor(activatedRoute: ActivatedRoute, foodService: FoodService,
    private router: Router ,private cartService:CartService) {
    activatedRoute.params.subscribe((data) => {
      if (data.id)
      foodService.getFoodyById(data.id).subscribe(data=>{
        this.food = data
      });
    });
  }
  addToCart() {
    console.log(this.food);
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
