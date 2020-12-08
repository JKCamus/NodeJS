/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-07 23:21:10
 * @LastEditors: camus
 * @LastEditTime: 2020-12-08 13:25:30
 */
const Router = require("koa-router");
const photoRouter = new Router({ prefix: "/photo" });
const { getPhotos, photoInfo } = require("../controller/photo.controller");

photoRouter.get("/getPhotos", getPhotos);
photoRouter.get("/:filename", photoInfo);

module.exports = photoRouter;
