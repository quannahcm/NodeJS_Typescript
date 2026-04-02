import express, { Express } from "express"
//config static file
const configStaticFile = (app: Express, publicFile: string) => {
    app.use(express.static(publicFile))
}

export {
    configStaticFile
}


