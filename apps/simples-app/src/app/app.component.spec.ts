import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';

import { Router } from '@angular/router';
import { AppCoreModule } from '@simples/app-core';
import { MaterialModule } from '@simples/app-shared';
import { AppStoreModule } from '@simples/app-store';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        AppCoreModule.forRoot(environment),
        MaterialModule,
        AppRoutingModule,
        // AppSharedModule.forRoot(environment),
        AppStoreModule,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: 'environment', useValue: environment },
        { provide: 'env', useValue: environment },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        compiled = fixture.debugElement.nativeElement;
        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture.detectChanges();

        fixture.ngZone.run(() => {
          router.initialNavigation();
        });
        jest.setTimeout(10000);
      });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to simples-app!');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to simples-app!');
  });

  // it('should get 4 RouterLinks', () => {
  //   expect(router.config.length).toEqual(4);
  // });

  // it('should redirect to /dashboard when navigate to ""', async(() => {
  //   fixture.ngZone.run(() => {
  //     fixture.whenStable().then(() => {
  //       router.navigate(['']).then(() => {
  //         expect(location.path()).toEqual('/dashboard');
  //       });
  //     });
  //   });
  // }));

  // it('should navigate to /heroes', async(() => {
  //   fixture.ngZone.run(() => {
  //     fixture.whenStable().then(() => {
  //       router.navigate(['/heroes']).then(() => {
  //         expect(location.path()).toEqual('/heroes');
  //       });
  //     });
  //   });
  // }));
});
