import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {

  }

  title = 'app';
  public mode = 1;
  test: string;
  question: string;
  testString: string;
  questionString: string;
}

