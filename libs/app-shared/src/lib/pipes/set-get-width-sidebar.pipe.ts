import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setGetWidthSidebar'
})
export class SetGetWidthSidebarPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  console.log('pipe')
    return 80;
  }
  getWidth(){
    return 80;
  }

}
