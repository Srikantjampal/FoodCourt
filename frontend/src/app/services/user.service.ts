import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/user';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { IuserRegister } from '../shared/interfaces/IUserRegister';

const User_KEY ='User';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user:User = this.getUserFromLocalStorage();
  private userSubject = new BehaviorSubject<User>(this.user);
  public userObservable!: Observable<User>;

  constructor(private http: HttpClient, private toastrservice: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  public get currentUser():User{
    return this.userSubject.value;
  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http
      .post<User>('http://localhost:5000/api/users/login', userLogin)
      .pipe(
        tap({
          next: (user) => {
            this.setUserToLocalStorage(user);
            this.userSubject.next(user);
            this.toastrservice.success(
              `Welcome to Foodmine ${user.name}`,
              'Login Successful'
            );
          },
          error: (errResponse) => {
            this.toastrservice.error(errResponse.error, 'Login Failed');
          },
        })
      );

    }

    logout(){
      this.userSubject.next(new User());
      localStorage.removeItem(User_KEY);
      window.location.reload();
    }

    private setUserToLocalStorage(user:User){
      localStorage.setItem(User_KEY,JSON.stringify(user));
    }

    register(userRegister:IuserRegister):Observable<User>{
      return this.http.post<User>("http://localhost:5000/api/users/register", userRegister)
      .pipe(tap({
        next:(user)=>{
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrservice.success(
            `Welcome to Foodmine${user.name}`,
            'Register Successful'
          )
        },
          error: (errResponse) => {
            this.toastrservice.error(errResponse.error, 'Login Failed');
          }
        }
      ))
    }

    private getUserFromLocalStorage():User{
      if(typeof localStorage !== 'undefined'){
        const user = localStorage.getItem(User_KEY);
        if(user) return JSON.parse(user) as User
      }
      return new User();
    }
}
