import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-toolbar-crud-dlg',
  templateUrl: './toolbar-crud-dlg.component.html',
  styleUrls: ['./toolbar-crud-dlg.component.scss'],
})
export class ToolbarCrudDlgComponent implements OnInit {
  isDev = !this.env.production;
  // teste

  @Input() operation: string;

  @Input() title: string;
  @Input() isDirty: boolean;
  @Input() deleteButton;
  @Input() saveButton;
  @Input() isValid: boolean = true;
  @Input() showArrowBack: boolean = true;
  @Input() showMenuButton: boolean = false;

  @Input() matMenuIndex: MatMenu;
  @Input() showLeftMenu = false;
  @Input() showCancel = true;

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();
  @Output() delete = new EventEmitter();

  @Input() form: FormGroup;

  constructor(@Inject('env') private env: any) {}

  ngOnInit(): void {}

  onCancel(event: any): void {
    this.cancel.emit(event);
  }

  onSave(event: any): void {
    if (this.form) {
      this.save.emit(event);
    }
  }

  onDelete(event: any): void {
    this.delete.emit(event);
  }
}
