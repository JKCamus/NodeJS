/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-11-24 17:22:23
 * @LastEditors: camus
 * @LastEditTime: 2020-11-24 21:57:02
 */
const Koa = require("koa");
const app = new Koa();
const userRouter = require("../router/user.router");
const bodyParser = require("koa-bodyparser");
/* 挨个执行中间件 */
app.use(bodyParser());
app.use(userRouter.routes());
/* 检测路由方法是否正确 */
app.use(userRouter.allowedMethods());

module.exports = app;
