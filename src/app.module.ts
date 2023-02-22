import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { AdminController } from './admin/admin.controller';
import { DogsController } from './dogs/dogs.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [CatsController, AdminController, DogsController],
  providers: [],
})
export class AppModule {}
