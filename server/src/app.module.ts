import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AddressbooksModule } from './addressbooks/addressbooks.module';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [AuthModule, AddressbooksModule, GroupsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
