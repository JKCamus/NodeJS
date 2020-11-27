/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-11-27 16:33:16
 * @LastEditors: camus
 * @LastEditTime: 2020-11-27 16:46:17
 */
const Router = require("koa-router");
const momentRouter = new Router({ prefix: "/moment" });
const { create } = require("../controller/moment.controller");
const {verifyAuth}=require('../middleware/auth.middleware')

momentRouter.post("/",verifyAuth, create);
module.exports = momentRouter
