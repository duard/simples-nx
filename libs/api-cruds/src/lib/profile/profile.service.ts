import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

import { ProfileEntity } from './profile.entity';

@Injectable()
export class ProfileService extends TypeOrmCrudService<ProfileEntity> {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<ProfileEntity>
  ) {
    super(profileRepository);
  }
}
