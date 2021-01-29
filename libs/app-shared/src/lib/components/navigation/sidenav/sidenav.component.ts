import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Data, NavigationEnd, Router } from '@angular/router';
import { SettingsFacade } from '@simples/app-store';
import { selectMenu } from 'libs/app-store/src/lib/settings/settings.selectors';
import {
  ExpandedLTR,
  ExpandedRTL,
  MultilevelMenuService,
  MultilevelNodes,
  SlideInOut
} from 'ng-material-multilevel-menu';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'simples-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [SlideInOut, ExpandedLTR, ExpandedRTL]
})
export class SidenavComponent implements OnInit {
  menuWithID: MultilevelNodes[] = null;

  @Output() sideNavClosed = new EventEmitter();
  @Output() menuReady = new EventEmitter();

  @Input() menuItens: any;

  subs: Array<Subscription> = [];

  menuRoute: string;
  menuSelected: any;

  config = {
    paddingAtStart: true,
    classname: 'my-custom-class',
    // listBackgroundColor: `rgb(208, 241, 239)`,
    // fontColor: `rgb(8, 54, 71)`,
    // backgroundColor: `rgb(208, 241, 239)`,
    // selectedListFontColor: `red`,

    interfaceWithRoute: true,
    highlightOnSelect: true,

    collapseOnSelect: true,
    useDividers: true,
    rtlLayout: false
  };

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private multilevelMenuService: MultilevelMenuService,
    private settingsFacade: SettingsFacade
  ) {
    // this.router.events
    //   .pipe(
    //     filter(event => event instanceof NavigationEnd),
    //     map(() => this.activeRoute.snapshot),
    //     map(route => {
    //       while (route.firstChild) {
    //         route = route.firstChild;
    //       }
    //       return route;
    //     })
    //   )
    //   .subscribe((route: ActivatedRouteSnapshot) => {
    //     this.menuRoute = route.data.tela;
    //     // console.log('MENUUUS', 'entries', this.menuWithID);
    //     const menuFinded = this.findMenuByLabel(this.menuWithID, this.menuRoute);
    //     // console.log('MENU', this.menuRoute, this.menuSelected);
    //     this.multilevelMenuService.selectMenuByID(this.menuSelected.id);
    //   });
  }

  findMenuByLabel(o, label) {
    const first = o.find(x => {
      if (x.label == label) {
        return x;
      }
    });

    if (first) {
      this.menuSelected = first;
      return first;
    } else {
      let result, p;
      for (p in o) {
        if (o[p].hasOwnProperty('items')) {
          this.findMenuByLabel(o[p].items, label);
        }
      }
    }
  }

  ngOnInit(): void {}

  onMenuClick() {
    this.sideNavClosed.emit();
  }

  setExpandCollapseStatus(type) {
    // this.multilevelMenuService.setMenuExapandCollpaseStatus(type);
  }

  selectedItem(menu) {
    console.log('selectedItem', menu);
    // this.multilevelMenuService.selectMenuByID(menu.id);
  }

  selectedLabel(menu) {
    console.log('selectedLabel', menu);
    // this.multilevelMenuService.selectMenuByID(menu.id);
  }

  selectMenuID(MenuID) {
    // this.multilevelMenuService.selectMenuByID(MenuID);
    console.log('selectedLabel', MenuID);
  }

  menuIsReady(menus: MultilevelNodes[]) {
    this.menuWithID = menus;
  }

  onAbout() {
    this.router.navigateByUrl('/about');
    this.sideNavClosed.emit(); // Emit event to parent component so it can tell sidenav to close
  }

  ngOnDestroy(): void {
    console.log('dESTRUIÇÃO SideNav');
    this.subs.forEach(s => s.unsubscribe());
  }
}
