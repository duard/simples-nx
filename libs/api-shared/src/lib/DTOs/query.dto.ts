import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class QueryDto {
  @ApiProperty()
  @IsOptional()
  limit: number;

  @ApiProperty()
  @IsOptional()
  offset: number;

  @ApiProperty()
  @IsOptional()
  searchBy: any | any[];

  @ApiProperty()
  @IsOptional()
  search: string;

  @ApiProperty()
  @IsOptional()
  orderBy: string;

  @ApiProperty()
  @IsOptional()
  orderType: string;

  @ApiProperty()
  @IsOptional()
  status: any;
}
