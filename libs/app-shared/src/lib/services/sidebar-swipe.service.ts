import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SidebarSwipeService {
  width: number = 80;
  constructor(private http: HttpClient) { }

  getWidth(){
    return this.width;
  }
  setWidth(widthNumner: number){
    this.width = widthNumner;

  }
}
