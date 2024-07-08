import { NestFactory } from '@nestjs/core';
import * as cookieParser from "cookie-parser";
import { NestExpressApplication } from '@nestjs/platform-express';
import "dotenv/config";

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.enableCors({
        origin: (origin, callback) => {
            // Vérifier si l'origine de la requête est autorisée
            // Par exemple, autoriser toutes les origines sur localhost avec n'importe quel port
            if (origin && origin.startsWith('http://localhost')) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
        allowedHeaders: ["Content-Type"]
    });
    app.use(cookieParser());

    await app.listen(8080);
}

bootstrap();
