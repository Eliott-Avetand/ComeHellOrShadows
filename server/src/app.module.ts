import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { OptInModule } from './opt_in/opt_in.module';
import { BadgeModule } from './badge/badge.module';
import { MediaModule } from './media/media.module';
import { ReadingPreferencesModule } from './reading_preferences/reading_preferences.module';
import { UsersModule } from './users/users.module';

import { User } from './users/entities/user.entity';
import { ReadingPreference } from './reading_preferences/entities/reading_preference.entity';
import { OptIn } from './opt_in/entities/opt_in.entity';
import { Badge } from './badge/entities/badge.entity';
import { Media } from './media/entities/media.entity';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRoot({
            type: "mysql",
            host: process.env.DB_HOST,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: parseInt(process.env.DB_PORT, 10) || 3306,
            entities: [User, ReadingPreference, OptIn, Badge, Media],
            autoLoadEntities: true,
            synchronize: true,
            // dropSchema: true,
        }),
        UsersModule,
        AuthModule,
        OptInModule,
        ReadingPreferencesModule,
        BadgeModule,
        MediaModule,
    ],
})

export class AppModule {}
