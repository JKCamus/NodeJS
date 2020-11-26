/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-11-24 17:22:23
 * @LastEditors: camus
 * @LastEditTime: 2020-11-26 11:36:34
 */
const Koa = require("koa");
const app = new Koa();
const userRouter = require("../router/user.router");
const authRouter = require("../router/auth.router");
const bodyParser = require("koa-bodyparser");
const errorHandler = require("./error.handle");
/* 挨个执行中间件 */
app.use(bodyParser());
app.use(userRouter.routes());
/* 检测路由方法是否正确 */
app.use(authRouter.routes());
app.use(userRouter.allowedMethods());
/* 监听事件error，当发生error事件的时候，会执行errorHandler */
app.on("error", errorHandler);

module.exports = app;
