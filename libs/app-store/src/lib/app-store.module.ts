import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { isDevMode, NgModule } from '@angular/core';
import { EntityCollectionReducerMethodsFactory, EntityDataModule, PersistenceResultHandler } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../../../apps/simples-app/src/environments/environment';
import { metaReducers, reducers } from './';
import { AdditionalEntityCollectionReducerMethodsFactory } from './additional-entity-collection-reducer-methods-factory';
import { AdditionalPersistenceResultHandler } from './additional-persistence-result-handler';
import { entityConfig } from './entity-metadata';
import { HydrationEffects } from './hydration/hydration.effects';
import { RouterEffects } from './router/router.effects';
import { SettingsEffects } from './settings/settings.effects';

const RouterStateMinimal = 1;

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        // strictActionWithinNgZone: false,
        strictActionImmutability: false,
        strictActionSerializability: false,
        strictActionTypeUniqueness: isDevMode(),
        strictActionWithinNgZone: isDevMode(),
        strictStateImmutability: isDevMode(),
        strictStateSerializability: false
      }
    }),
    EffectsModule.forRoot([HydrationEffects, RouterEffects, SettingsEffects]),
    StoreRouterConnectingModule.forRoot({ routerState: RouterStateMinimal }),
    EntityDataModule.forRoot(entityConfig),

    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          name: '2020 Estoques',
          maxAge: 26
        })
  ],
  providers: [
    {
      provide: PersistenceResultHandler,
      useClass: AdditionalPersistenceResultHandler
    },
    {
      provide: EntityCollectionReducerMethodsFactory,
      useClass: AdditionalEntityCollectionReducerMethodsFactory
    }
  ]
})
export class AppStoreModule {
  constructor() {
    console.log('isDevMode()', isDevMode());
  }
}
