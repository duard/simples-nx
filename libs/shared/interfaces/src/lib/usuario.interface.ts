import { Base } from './base-interface';

export interface Usuario extends Base {
  pessoa: number;
  password: string;
  token: string;
  reseted: boolean;
  checked: boolean;
  blocked: boolean;
}


