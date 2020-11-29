/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-11-27 16:33:16
 * @LastEditors: camus
 * @LastEditTime: 2020-11-29 13:56:00
 */
const Router = require("koa-router");
const momentRouter = new Router({ prefix: "/moment" });
const {
  create,
  detail,
  getList,
  update,
  remove
} = require("../controller/moment.controller");
const { verifyAuth } = require("../middleware/auth.middleware");
const { verifyPermission } = require("../middleware/auth.middleware");
momentRouter.post("/", verifyAuth, create);
momentRouter.get("/:momentId", detail);
momentRouter.get("/", getList);
momentRouter.patch("/:momentId", verifyAuth,verifyPermission, update);
momentRouter.delete("/:momentId",verifyAuth,verifyPermission,remove)

module.exports = momentRouter;
