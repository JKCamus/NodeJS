/*
 * @Description:app核心
 * @version:
 * @Author: camus
 * @Date: 2020-11-24 17:22:23
 * @LastEditors: camus
 * @LastEditTime: 2020-11-27 14:45:21
 */
const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const errorHandler = require("./error.handle");
const useRoutes = require("../router");
/* 挨个执行中间件 */
app.use(bodyParser());
// app.use(userRouter.routes());
// /* 检测路由方法是否正确 */
// app.use(authRouter.routes());
// 导入路由后，就可以不用再分开使用路由了
useRoutes(app);
// app.use(userRouter.allowedMethods());
/* 监听事件error，当发生error事件的时候，会执行errorHandler */
app.on("error", errorHandler);

module.exports = app;
