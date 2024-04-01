import { Routes } from '@angular/router';
import { HomeComponent } from './Components/pages/home/home.component';
import { FoodPageComponent } from './Components/pages/food-page/food-page.component';
import { CartPageComponent } from './Components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './Components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './Components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './Components/pages/checkout-page/checkout-page.component';
import { PaymentPageComponent } from './Components/pages/payment-page/payment-page.component';

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'search/:searchTerm', component:HomeComponent },
  {path:'tag/:tag',component:HomeComponent},
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component:CartPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'checkout',component:CheckoutPageComponent},
  {path:'payment',component:PaymentPageComponent},
];
