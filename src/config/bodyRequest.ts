import express, { Express } from "express";

//config body request from Client
const configBodyRequest = (app: Express) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
}

export {
    configBodyRequest
}