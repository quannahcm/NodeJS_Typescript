import { Request, Response } from "express"
import { handleCreateUser, handleGetAllUser } from "services/userService"

const getHomePage = async (req: Request, res: Response) => {
    const users = await handleGetAllUser()
    res.render("home.ejs", { users: users })
}

const getCreateUserPage = (req: Request, res: Response) => {
    res.render("createUser.ejs")
}

const postCreateUser = async (req: Request, res: Response) => {
    const { userName, userEmail, userAddress } = req.body;
    handleCreateUser(userName, userEmail, userAddress)
    res.redirect("/")
}

const getTrollPage = (req: Request, res: Response) => {
    res.render("index.ejs")
}

export {
    getHomePage, getCreateUserPage, postCreateUser,
    getTrollPage
}