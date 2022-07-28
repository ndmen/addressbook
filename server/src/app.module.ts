import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AddressesModule } from './addressbooks/addresses.module';
import { GroupsModule } from './groups/groups.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, AddressesModule, GroupsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
