import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'simples-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss'],
})
export class FooterMobileComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  showBackArrow = true;


  @Output() sideNavClosed = new EventEmitter();


  constructor() {}

  ngOnInit(): void {}

  onToggleSidenav = () => {
    this.sidenavToggle.emit(); // Emit event to parent component so it can open/close sidenav
  };

  onMenuClick() {
    this.sideNavClosed.emit();
  }

}
