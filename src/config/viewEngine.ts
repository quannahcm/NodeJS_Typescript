import { Express } from "express";
//config view engine
const configViewEngine = (app: Express) => {
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/../views')
}

export {
    configViewEngine
}