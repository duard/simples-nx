import {
  EntityMetadataMap,
  EntityDataModuleConfig,
  DefaultDataServiceConfig,
} from '@ngrx/data';

export interface basicPaginationReponse {
  count: number;
  data: [];
  page: number;
  pageCount: number;
  total: number;
}

const moduleEntityMetadata: EntityMetadataMap = {
  Module: {
    additionalCollectionState: {
      pageInfo: null,
    },
  },
};

const entityMetadata: EntityMetadataMap = {
  Issue: {
    filterFn: (issues, text) => {
      if (text) {
        const lowercased = text.toLowerCase();
        return issues.filter(
          ({ title, description }) =>
            title.toLowerCase().includes(lowercased) ||
            description.toLowerCase().includes(lowercased)
        );
      } else {
        return issues;
      }
    },
  },
  // Cargos: {
  //   filterFn: (data, text) => {
  //     // console.log('recupera dados', data, text);
  //     if (text) {
  //       const lowercased = text.toLowerCase();
  //       return data.filter(
  //         ({ title, description }) =>
  //           title.toLowerCase().includes(lowercased) ||
  //           description.toLowerCase().includes(lowercased)
  //       );
  //     } else {
  //       // console.log('dados', data);
  //       return data;
  //     }
  //   },
  //   additionalCollectionState: {
  //     page: null,
  //     pageCount: null,
  //     total: null,
  //     foo: 'teste 12'
  //   },
  // },

  Cargos: {

    additionalCollectionState: {
      count: null,
      page: null,
      pageCount: null,
      total: null,
      foo: 'teste 12',
    },
  },
};

const pluralNames = { Cargos: 'Cargos' };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  entityHttpResourceUrls: {
    // Issue: {
    //   collectionResourceUrl: '/api/issues/',
    //   entityResourceUrl: '/api/issues/',
    // },
    // Cargos: {
    //   collectionResourceUrl: '/api/cargos/',
    //   entityResourceUrl: '/api/cargos/',
    // },
  },
};

/*
//eds: EntityDefinitionService in the constructor

const entityMetadata: EntityMetadataMap = {
      EntityDataItem: {
        filterFn:(entities: EntityDataItem[], pattern:{startIndex: number, endIndex: number}) => {
          return entities.filter((entity, index) => {
            return ((index >= pattern.startIndex) && (index <= pattern.endIndex));
          })
        }
      }
    };
eds.registerMetadataMap(entityMetadata);
*/
