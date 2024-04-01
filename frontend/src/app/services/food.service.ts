import { Observable } from 'rxjs';
import { Tag } from './../shared/models/tag';
import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Food[]>{
    return this.http.get<Food[]>('http://localhost:5000/api/foods');
  }

  getAllFoodBySearchTerm(searchTerm:string){
    return this.http.get<Food[]>('http://localhost:5000/api/foods/search/' + searchTerm);
  }

  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>('http://localhost:5000/api/foods/tags');
  }

  getAllFoodsByTag(tag:string):Observable<Food[]>{
    return tag =="All"? this.getAll():this.http.get<Food[]>('http://localhost:5000/api/foods/tags/' + tag);
  }

  getFoodyById(foodId:string):Observable<Food>{
    return this.http.get<Food>('http://localhost:5000/api/foods/' +foodId);
  }
}
