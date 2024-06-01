import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';

//This is the metadata attached to the AppComponent class in form of decorator(Component decorator)    
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TestComponent], //after adding the new component add the component name in the Imports 
  templateUrl: './app.component.html', //templateUrl points to an html component which represents the view for this file
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Suman'; //Here title is the property and we dont have any methods here
}
