/*
 * @Description:负责注册接口，具体逻辑在controller里面
 * @version:
 * @Author: camus
 * @Date: 2020-11-24 19:59:38
 * @LastEditors: camus
 * @LastEditTime: 2020-11-24 21:51:01
 */
const Router = require("koa-router");
const { create } = require("../controller/user.controller");
const userRouter = new Router({ prefix: "/users" });

// userRouter.post("/", (ctx, next) => {
//   ctx.body = "创建用户成功";
// });
// 可以直接从controller中获取具体逻辑放入请求中
userRouter.post("/", create);

module.exports = userRouter;
