import { Router } from "express";
import { HttpAdapter } from "../../../../utils/adapters/httpAdapter";
import UserController from "../controller/user.controller";

const userRoutes = Router();

userRoutes.post("/create", HttpAdapter(UserController.create));

export default userRoutes;
