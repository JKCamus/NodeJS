/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-11-26 10:59:33
 * @LastEditors: camus
 * @LastEditTime: 2020-11-26 11:38:27
 */
const Router = require("koa-router");

const authRouter = new Router();
const {login}=require("../controller/auth.controller")

const { verifyLogin } = require("../middleware/auth.middleware");
authRouter.post("/login",verifyLogin, login);
module.exports = authRouter;
