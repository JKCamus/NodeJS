/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-11-27 16:33:16
 * @LastEditors: camus
 * @LastEditTime: 2020-11-27 22:06:21
 */
const Router = require("koa-router");
const momentRouter = new Router({ prefix: "/moment" });
const { create, detail, getList } = require("../controller/moment.controller");
const { verifyAuth } = require("../middleware/auth.middleware");

momentRouter.post("/", verifyAuth, create);
momentRouter.get("/:momentId", detail);
momentRouter.get("/", getList);

module.exports = momentRouter;
