import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';

@Module({ providers: [CatsService], exports: [CatsService] })
export class CatsServiceModule {}
