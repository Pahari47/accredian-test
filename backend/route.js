import express from "express";
import { addRefer } from "./controller.js";


const referRouter = express.Router();

referRouter.post("/add",addRefer)


export default referRouter;