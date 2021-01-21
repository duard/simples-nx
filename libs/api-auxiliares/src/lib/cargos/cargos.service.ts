import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

import { CargosEntity } from './cargos.entity';

@Injectable()
export class CargosService extends TypeOrmCrudService<CargosEntity> {
  constructor(
    @InjectRepository(CargosEntity) thisRepository: Repository<CargosEntity>
  ) {
    super(thisRepository);
  }

  getData(): unknown {
    return { message: 'Welcome to api!' };
  }
}
