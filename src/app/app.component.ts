import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = 'recipe';
  title = 'app';
  onNavigate(route: string) {
    this.show = route;
  }
}
