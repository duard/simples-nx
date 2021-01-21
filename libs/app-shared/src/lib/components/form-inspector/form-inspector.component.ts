import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-inspector',
  templateUrl: './form-inspector.component.html',
  styleUrls: ['./form-inspector.component.scss'],
})
export class FormInspectorComponent implements OnInit {
  isDev = !this.env.production;
  @Input() form = null;

  constructor(@Inject('env') private env) {}

  ngOnInit() {}
}
