import { Column } from '@simples/app-shared';
import { Config } from '@simples/app-shared';

export class Configs {
  configuration = new Config(
    [
      {
        displayedColumn: 'id',
        columnRef: 'id',
        nameColumn: 'Id #',
        type: Column.TYPE_COMMOM,
        sorted: true,
      },
      {
        displayedColumn: 'description',
        columnRef: 'description',
        nameColumn: 'Descrição',
        type: Column.TYPE_COMMOM,
        sorted: true,
      },
      {
        displayedColumn: 'createdAt',
        columnRef: 'createdAt',
        nameColumn: 'Criado',
        type: Column.TYPE_DATE,
        sorted: true,
      },
      {
        displayedColumn: 'updatedAt',
        columnRef: 'updatedAt',
        nameColumn: 'Atualizado',
        type: Column.TYPE_DATE,
        sorted: true,
      },
      {
        displayedColumn: 'isActive',
        columnRef: 'isActive',
        nameColumn: 'Ativo',
        type: Column.TYPE_STATUS,
        sorted: true,
        disabled: true,
      },
      {
        displayedColumn: '',
        columnRef: 'actions',
        nameColumn: 'Ações',
        type: Column.TYPE_ACTIONS,
        sorted: false,
      },
    ],
    0
  );
}
