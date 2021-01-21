import { Base } from './base-interface';

export interface Pessoa extends Base {
  tipo_pessoa: string;
  email: string;
  usuario: number;
}


