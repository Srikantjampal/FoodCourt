import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearchComponent } from "../../partials/search/search.component";
import { TagsComponent } from "../../partials/tags/tags.component";
import { NotFoundComponent } from "../../partials/not-found/not-found.component";
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, SearchComponent, TagsComponent, RouterModule, NotFoundComponent,HttpClientModule]
})
export class HomeComponent implements OnInit{
foods:Food[]=[];

constructor(private foodservice:FoodService ,activatedRoute:ActivatedRoute ){
  let foodObservale:Observable<Food[]>;
  activatedRoute.params.subscribe((data)=>{
    if(data.searchTerm)
      foodObservale=this.foodservice.getAllFoodBySearchTerm(data.searchTerm);
    else if(data.tag)
      foodObservale = this.foodservice.getAllFoodsByTag(data.tag);
    else
      foodObservale = foodservice.getAll();

    foodObservale.subscribe((data)=>{
      this.foods = data;
    })
  })
}
ngOnInit(): void {
  }
}
