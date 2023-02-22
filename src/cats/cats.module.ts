import { Global, Module } from '@nestjs/common';
import { CatsServiceModule } from 'src/services/cats-service/cats-service.module';
import { CatsService } from 'src/services/cats-service/cats.service';
import { CatsController } from './cats.controller';

@Global()
@Module({
  imports: [CatsServiceModule],
  controllers: [CatsController],
  providers: [],
})
export class CatsModule {}
