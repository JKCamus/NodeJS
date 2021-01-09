/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-07 23:21:10
 * @LastEditors: camus
 * @LastEditTime: 2021-01-08 14:00:25
 */
const Router = require("koa-router");
const photoRouter = new Router({ prefix: "/photo" });
const { getPhotos, photoInfo,getAllPhotos } = require("../controller/photo.controller");
const { verifyAuth } = require("../middleware/auth.middleware");

photoRouter.get("/getPhotos", getPhotos);
photoRouter.get("/getAllPhotos", getAllPhotos);
photoRouter.get("/:filename", photoInfo);

// photoRouter.post('/updatePhoto',
// verifyAuth,
// )

module.exports = photoRouter;
