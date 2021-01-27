import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { SettingsFacade } from '@simples/app-store';
import {
  ExpandedLTR,
  ExpandedRTL,
  MultilevelMenuService,
  MultilevelNodes,
  SlideInOut
} from 'ng-material-multilevel-menu';

@Component({
  selector: 'simples-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [SlideInOut, ExpandedLTR, ExpandedRTL]
})
export class SidenavComponent implements OnInit {
  menuWithID: MultilevelNodes[] = null;

  @Output() sideNavClosed = new EventEmitter();

  @Input() menuItens: any;

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
  ) {}

  ngOnInit(): void {
    this.activeRoute.data.subscribe(data => {
      console.log('bongado ====>', data.menu);
      this.multilevelMenuService.selectMenuByID(data.menu);
    });
    this.multilevelMenuService.selectMenuByID('menus');
  }

  onMenuClick() {
    this.sideNavClosed.emit();
  }

  setExpandCollapseStatus(type) {
    this.multilevelMenuService.setMenuExapandCollpaseStatus(type);
  }

  selectedItem(menu) {
    console.log('item', menu);
    this.multilevelMenuService.selectMenuByID(menu.id);
  }

  selectedLabel(menu) {
    console.log('label', menu.id);
  }

  selectMenuID(MenuID) {
    this.multilevelMenuService.selectMenuByID(MenuID);
  }

  menuIsReady(menus: MultilevelNodes[]) {
    this.menuWithID = menus;
    console.log('estou pronto', typeof this.menuWithID);

    let entries = [this.menuWithID];

    // this.settingsFacade.pushMenu(this.menuWithID);
  }

  onAbout() {
    this.router.navigateByUrl('/about');
    this.sideNavClosed.emit(); // Emit event to parent component so it can tell sidenav to close
  }

  walkRecursive(walkable, walkFunc) {
    if (typeof walkable === 'object') {
      let v;
      if (walkable instanceof Array) {
        for (let i = 0, l = walkable.length; i < l; i++) {
          v = walkable[i];
          if (typeof v === 'object') {
            this.walkRecursive(v, walkFunc);
          } else {
            walkFunc(v, i, walkable);
          }
        }
      } else {
        for (let i in walkable) {
          v = walkable[i];
          if (typeof v === 'object') {
            this.walkRecursive(v, walkFunc);
          } else {
            walkFunc(v, i, walkable);
          }
        }
      }
    }
    return;
  }
}
