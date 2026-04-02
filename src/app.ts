import express, { Express, Request, Response } from 'express';
import webRoutes from './routers/web';
import "dotenv/config"
import { configViewEngine } from './config/viewEngine';
import { configBodyRequest } from './config/bodyRequest';
import { configStaticFile } from './config/staticFile';
import getConnection from './config/database';

const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;

//config ViewEngine, BodyRequest, StaticFile
configViewEngine(app);
configBodyRequest(app)
configStaticFile(app, 'public')

//config route
webRoutes(app)

//config Database Connection
getConnection()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});