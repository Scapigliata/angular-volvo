import { Component } from '@angular/core';

// * Component Decorator with metadata and template

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'VolvoCars';
  start: number = 0;
  color: string = 'transparent';
  maxWidth: number = 1775;
  heroSrc: string =
    'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my23/homepage/heroes/c40-recharge-hero-desktop-2560x1096.jpg?iar=0&w=1920';

  getPreviousImages() {
    if (this.start < 0) {
      this.start += 355;
    }
  }

  getNextImages() {
    if (this.start != -this.maxWidth) {
      this.start -= 355;
    }
  }
}
