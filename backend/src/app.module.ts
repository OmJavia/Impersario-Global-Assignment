import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(), // ✅ Load environment variables
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432, // ✅ Ensures DB_PORT is always defined
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'yourpassword',
      database: process.env.DB_NAME || 'Impersario',
      autoLoadEntities: true,
      synchronize: true, // ❗ Set to false in production
    }),
    AuthModule,
  ],
})
export class AppModule {}
