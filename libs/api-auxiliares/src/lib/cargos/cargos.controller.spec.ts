import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CargosController } from './cargos.controller';
import { CargosService } from './cargos.service';
import { CargosEntity } from "./cargos.entity";

describe('CargosController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([CargosEntity])],
      controllers: [CargosController],
      providers: [CargosService],
    }).compile();
  });

  afterAll(async () => {
    app.close();
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      const cargosController = app.get<CargosController>(CargosController);
      expect(cargosController.getData()).toEqual({ message: 'Welcome to api!' });
    });
  });
});
