import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DialogService, DialogRef } from '@ngneat/dialog';

@Component({
  styles: [
    `
      $height__main-toolbar: 64px;
      :host {
        display: block;
        height: 100%;

        &:after {
          right: 0;
        }
      }

      .wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        // margin-right: 5px;
      }
      .header,
      .footer {
        z-index: 99;
      }
      .content {
        flex: 1;
        overflow: auto;

        z-index: 9 !important;
        max-height: 178px;
      }

      .footer {
        z-index: 99;
        border-top: 2px solid #7c7a7a;
        -webkit-box-shadow: 0px -4px 3px rgba(70, 70, 70, 0.45);
        -moz-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.35);
        box-shadow: 0px -4px 3px rgba(70, 70, 70, 0.25);
      }

      p {
        color: blue;
      }
    `,
  ],
  template: `
    <div class="wrapper">
      <div class="header">
        <h1>header</h1>
      </div>

      <div class="content">
        <p *ngFor="let item of fakeArray(30)">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div class="footer">
        <h2>footer</h2>
      </div>
    </div>
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloWorldComponent {
  constructor(public ref: DialogRef) {}

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }
}
