import 'winston-daily-rotate-file';

import { ApiLoggerMiddleware } from '@api-core';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CargosModule } from '@simples/api-auxiliares';
import { MenuModule, ProfileModule } from '@simples/api-cruds';
import { ApiDatabaseModule } from '@simples/api-database';
import { PessoasModule, UsuariosModule } from '@simples/api-pessoas';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config';
import { DatabaseConfig } from './database.config';

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(winston.format.timestamp(), nestWinstonModuleUtilities.format.nestLike()),
          handleExceptions: true
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        new (winston.transports as any).DailyRotateFile({
          format: winston.format.combine(winston.format.timestamp(), winston.format.logstash()),
          filename: 'logs/info-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          maxFiles: '1d',
          level: 'info'
        }),
        new winston.transports.DailyRotateFile({
          filename: 'logs/error-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          maxFiles: '1d',
          level: 'error',
          format: winston.format.combine(winston.format.timestamp(), winston.format.logstash())
        })
      ],
      exceptionHandlers: [
        new winston.transports.DailyRotateFile({
          filename: 'logs/exception-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          maxFiles: '1d',
          format: winston.format.combine(winston.format.timestamp(), winston.format.logstash())
        })
      ]
    }),

    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig
    }),

    ApiDatabaseModule,
    ProfileModule,
    MenuModule,
    CargosModule,
    PessoasModule,
    UsuariosModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(ApiLoggerMiddleware).forRoutes('*');
  }
}
