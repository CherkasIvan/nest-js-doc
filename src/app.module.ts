import { Module } from '@nestjs/common';
import { AdminController } from './admin/admin.controller';
import { CatsModule } from './cats/cats.module';
import { DogsController } from './dogs/dogs.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, CatsModule],
  controllers: [AdminController, DogsController],
  providers: [],
})
export class AppModule {}
