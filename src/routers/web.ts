import express, { Express, Request, Response } from 'express';
import { getCreateUserPage, getHomePage, getTrollPage, postCreateUser } from '../controllers/userController';
const router = express.Router();

const webRoutes = (app: Express) => {
    router.get('/', getHomePage);
    router.get('/createUser', getCreateUserPage)
    router.post('/handle-create-user', postCreateUser)

    //troll
    router.get('/tori', getTrollPage)
    app.use('/', router)
}

export default webRoutes