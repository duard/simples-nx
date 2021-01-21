import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Option } from './option.model';
import { StyleManagerService } from './style-manager.service';

@Injectable()
export class ThemeService {
  constructor(
    private http: HttpClient,
    private styleManager: StyleManagerService
  ) {}

  getThemeOptions(): Observable<Array<Option>> {
    return this.http.get<Array<Option>>('assets/options.json');
  }

  setTheme(themeToSet) {

    // console.log('Setando o theme', themeToSet);
    this.styleManager.setStyle(
      'theme',
      `./assets/material-styles/${themeToSet}.css`
    );
  }
}
// @import "~@angular/material/prebuilt-themes/indigo-pink.css";
// node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css
