import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/partials/header/header.component";
import { HomeComponent } from "./Components/pages/home/home.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { LoadingComponent } from "./Components/partials/loading/loading.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent, RouterModule, ReactiveFormsModule, FormsModule, ToastrModule, LoadingComponent]
})
export class AppComponent {
  title = 'frontend';
}
