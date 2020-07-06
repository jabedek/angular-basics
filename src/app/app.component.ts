import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'John';

  constructor() {
    this.changeName('Paul');
  }

  changeName(name: string): void {
    this.name = name;
  }
}
