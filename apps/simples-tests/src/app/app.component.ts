import { Component } from '@angular/core';

@Component({
  selector: 'simples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'simples-tests';

  avatar = 'https://avatars0.githubusercontent.com/u/36894?s=460&u=cebfed916cc490b3c9eaebe25460ee4141ee698e&v=4';
  showLoader = true;
  readonly avatarUrl = this.avatar;

  constructor() {
    console.log(this.avatar);
  }

  onClick(event: MouseEvent) {
    console.log('click', event);
  }
  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }
}
