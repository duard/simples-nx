import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '@simples/app-core';
import { SettingsFacade } from '@simples/app-store';
import { Observable } from 'rxjs';

import { Option } from "@simples/app-core";

@Component({
  selector: 'simples-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent implements OnInit {
  // You will want to hide and show a back-arrow depending on navigation state, if linking to other components from within the components
  // Not handling that in this demo.  Just leaving it here for illustration purposes
  showBackArrow = true;
  leftSideNav$ = this.settingsFacade.selectSidenav$;
  // outro1$ = this.navFacade.outro1$;
  // outro2$ = this.navFacade.outro2$;
  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();

  @Output() sideNavClosed = new EventEmitter();
  @Input() windowTitle = 'Janela Sem Título Configurado';

  constructor(
    private router: Router,
    private readonly themeService: ThemeService,
    private settingsFacade: SettingsFacade
  ) {}

  ngOnInit(): void {
    this.themeService.setTheme('indigo-pink');
  }

  onLeftSideNavBackClick() {
    this.sideNavClosed.emit();
  }

  onMenuClick() {
    console.log('Clicou no menu da janela', this.windowTitle);
  }

  onChangeProfileImage() {
    this.router.navigateByUrl('/profile/personal');
  }

  themeChangeHandler(themeToSet) {
    this.themeService.setTheme(themeToSet);
  }

  open(menu) {
    menu.openMenu();
  }
}
