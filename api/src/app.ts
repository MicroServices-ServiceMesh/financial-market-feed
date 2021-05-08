import { Server } from "http";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Context } from "aws-lambda";
import * as serverlessExpress from 'aws-serverless-express';
import express from 'express';
import {ExpressAdapter} from '@nestjs/platform-express';


let lambdaProxy: Server;

async function bootstrap() {
    const expressServer = express();
    const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressServer));
    await nestApp.init();

    return serverlessExpress.createServer(expressServer);
}

export const handler = async (event: any, context: Context) => { 
  // Lambda Cold start: if warm, use cached server 
  if (!lambdaProxy) { 
    lambdaProxy = await bootstrap(); 
  } 
  try { 
    return serverlessExpress.proxy(lambdaProxy, event, context, 'PROMISE').promise; 
  } catch (e) { 
    return { 
      statusCode: 500, 
      body: e.message 
    } 
  } 
};