import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  // to use the selector as a CLASS we need to follow certain steps
  //1. selector: '.app-test',
  //2. Go to the app.component.html and see the changes there

  //to use the selector as an ATTRIBUTE we can follow below steps
  //1. selector: '[app-test]',
  //2. go to app.component.ts and check
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

}
