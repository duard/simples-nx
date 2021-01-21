import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-toolbar-crud-footer',
  templateUrl: './toolbar-crud-footer.component.html',
  styleUrls: ['./toolbar-crud-footer.component.scss'],
})
export class ToolbarCrudFooterComponent implements OnInit {
  @Input() total = 0;
  @Output() paginate = new EventEmitter();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor() {}

  ngOnInit() {}

  onPaginate(event) {
    this.paginate.emit(event);
  }
}
