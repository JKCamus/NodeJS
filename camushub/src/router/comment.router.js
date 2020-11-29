/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-11-29 14:04:33
 * @LastEditors: camus
 * @LastEditTime: 2020-11-29 14:12:10
 */
const Router = require("koa-router");
const commentRouter = new Router({ prefix: "/comment" });
const { create } = require("../controller/comment.controller");

const { verifyAuth } = require("../middleware/auth.middleware");
const { verifyPermission } = require("../middleware/auth.middleware");

commentRouter.post("/", verifyAuth, create);

module.exports = commentRouter