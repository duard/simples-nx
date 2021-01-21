import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tuiPure, TUI_DEFAULT_MATCHER, TuiStringHandler, TuiContextWithImplicit, ceil, sum } from '@taiga-ui/cdk';
import { TuiDialogService, TuiNotificationsService, TuiPoint } from '@taiga-ui/core';
const ITEMS: readonly string[] = [
  'Luke Skywalker',
  'Leia Organa Solo',
  'Darth Vader',
  'Han Solo',
  'Obi-Wan Kenobi',
  'Yoda',
];
@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss'],
})
export class BlankComponent implements OnInit {
  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(TuiNotificationsService)
    private readonly notificationsService: TuiNotificationsService
  ) {}

  // Multiselect
  search = '';

  avatar = 'https://avatars0.githubusercontent.com/u/36894?s=460&u=cebfed916cc490b3c9eaebe25460ee4141ee698e&v=4;';
  readonly avatarUrl = this.avatar;

  readonly control = new FormControl([ITEMS[0]]);

  @tuiPure
  filter(search: string | null): readonly string[] {
    return ITEMS.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  // Button with a dialog
  showDialog() {
    this.dialogService.open('Hello!', { size: 's' }).subscribe();
  }

  showNotification() {
    this.notificationsService
      .show('It is a simple notification', {
        label: 'Wow! With a heading!',
      })
      .subscribe();
  }

  // Tabs
  activeTab = 0;

  // Charts
  // LineChart
  readonly hint: TuiStringHandler<TuiContextWithImplicit<ReadonlyArray<TuiPoint>>> = ({ $implicit }) =>
    `${$implicit[0][0]} items:\n\n${$implicit.map(([_, y]) => y).join('$\n')}$`;

  readonly values = [
    [
      [50, 50],
      [100, 75],
      [150, 50],
      [200, 150],
      [250, 155],
      [300, 190],
      [350, 90],
    ],
    [
      [50, 40],
      [100, 60],
      [150, 90],
      [200, 120],
      [250, 150],
      [300, 110],
      [350, 130],
    ],
    [
      [50, 30],
      [100, 90],
      [150, 80],
      [200, 50],
      [250, 130],
      [300, 190],
      [350, 150],
    ],
  ];

  // BarChart
  readonly value = [
    [3660, 8281, 1069, 9034, 5797, 6918, 8495, 3234, 6204, 1392, 2088, 8637, 8779],
    [3952, 3671, 3781, 5323, 3537, 4107, 2962, 3320, 8632, 4755, 9130, 1195, 3574],
  ];
  readonly labelsX = ['Jan 2019', 'Feb', 'Mar'];
  readonly labelsY = ['0', '10 000'];

  getHeight(max: number): number {
    return (max / ceil(max, -3)) * 100;
  }

  // RingChart
  readonly ringValue = [13769, 12367, 10172, 3018, 2592];

  private readonly sum = sum(...this.ringValue);
  private readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];

  getValue(index: number): number {
    return Number.isNaN(index) ? this.sum : this.ringValue[index];
  }

  getLabel(index: number): string {
    return Number.isNaN(index) ? 'Total' : this.labels[index];
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
