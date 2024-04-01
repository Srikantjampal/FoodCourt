import { NgStyle } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'input-container',
  standalone: true,
  imports: [ReactiveFormsModule,NgStyle],
  templateUrl: './input-container.component.html',
  styleUrl: './input-container.component.css'
})
export class InputContainerComponent {
  @Input()
  label!:string;
  @Input()
  bgColor = 'white';

  constructor() { }

  ngOnInit(): void {
  }

}
