import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor() {}

  private _isShow: boolean = false;

  show() {
    setTimeout(() => {
      // console.log('loading', true);
      this._isShow = true;
    }, 10);
  }

  hide() {
    setTimeout(() => {
      // console.log('loading', false);
      this._isShow = false;
    }, 10);
  }

  getStatus(): boolean {
    return this._isShow;
  }
}
