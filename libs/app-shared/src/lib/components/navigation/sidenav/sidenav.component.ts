import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ExpandedLTR, ExpandedRTL, MultilevelMenuService, SlideInOut } from 'ng-material-multilevel-menu';

@Component({
  selector: 'simples-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    SlideInOut,
    ExpandedLTR,
    ExpandedRTL,
  ]
})
export class SidenavComponent implements OnInit {
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
    useDividers: false,
    rtlLayout: false,



  };

  constructor(
    private router: Router,
    private multilevelMenuService: MultilevelMenuService
  ) {}

  ngOnInit(): void {}

  onMenuClick() {
    this.sideNavClosed.emit();
  }

  setExpandCollapseStatus(type) {
    this.multilevelMenuService.setMenuExapandCollpaseStatus(type);
  }

  selectedItem(menu) {
    console.log(menu);
  }

  onAbout() {
    this.router.navigateByUrl('/about');
    this.sideNavClosed.emit(); // Emit event to parent component so it can tell sidenav to close
  }

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }
}
