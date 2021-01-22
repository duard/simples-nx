import { Base } from './base-interface';

export interface Menu extends Base {
  index?: number;

  title: string;
  icon?: string;
  link?: string;
  type?: string;

  menus?: Menu[];
  parentId?: number;
  profiles?: any[];

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  isDeleted?: boolean;
  isActive?: boolean;
}
