// Component
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export function UnsubscribeDecorator(): ClassDecorator {
  const destroyed$: Subject<any> = new Subject();

  return function (componentClass: any) {
    // copy component ngOnDestroy
    const destroyHook = componentClass.prototype['ngOnDestroy'];

    componentClass.prototype['unsubsribeOnDestroy'] = (
      source: Observable<any>
    ): Observable<any> => source.pipe(takeUntil(destroyed$));

    // mutate component ngOnDestroy
    componentClass.prototype['ngOnDestroy'] = () => {
      destroyed$.next(true);
      destroyed$.complete();

      // tslint:disable-next-line:no-unused-expression
      destroyHook && destroyHook();
    };
  };
}
