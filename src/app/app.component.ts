import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-md-ngrx';

  darkTheme = false;

  switchTheme(check: boolean) {
    console.log('check======', check);
    this.darkTheme = check;
  }
}
