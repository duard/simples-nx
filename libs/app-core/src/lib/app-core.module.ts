import { CommonModule } from '@angular/common';
import {
  Inject,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { StyleManagerService } from './services/style-manager.service';
import { ThemeService } from './services/theme.service';


@NgModule({
  imports: [CommonModule],
  providers: [StyleManagerService, ThemeService]
})
export class AppCoreModule {
  public static forRoot(env: any): ModuleWithProviders<AppCoreModule> {
    return {
      ngModule: AppCoreModule,

      providers: [
        {
          provide: 'env',
          useValue: env,
        },
      ],
    };
  }

  constructor(
    // private apiUrlService: ApiUrlService,
    @Inject('env') private env,
    @Optional()
    @SkipSelf()
    parentModule?: AppCoreModule
  ) {
    // this.menuItems$.subscribe(dataMenu => console.log('!!!', dataMenu));

    // console.log(0, 'Setando API');
    // this.apiUrlService.getMyConfig();

    console.log('isDev', !env.production);
    // console.log(3, 'Check domain name', env.domain);

    if (parentModule) {
      throw new Error(
        'AppCoreModule só pode ser importada uma vez, no AppModule :-('
      );
    }
  }
}
