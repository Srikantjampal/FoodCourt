import { Component, Input } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'oreder-items-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  templateUrl: './oreder-items-list.component.html',
  styleUrl: './oreder-items-list.component.css'
})
export class OrederItemsListComponent {
  @Input()
  order!:Order;
}
