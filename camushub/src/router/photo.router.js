/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-07 23:21:10
 * @LastEditors: camus
 * @LastEditTime: 2021-02-07 14:16:56
 */
const Router = require("koa-router");
const photoRouter = new Router({ prefix: "/photo" });
const {
  getPhotos,
  photoInfo,
  getAllPhotos,
  clearPhotos,
} = require("../controller/photo.controller");
const { verifyAuth } = require("../middleware/auth.middleware");
const { photoHandler, photoResize } = require("../middleware/file.middleware");
const { savePhotoInfo } = require("../controller/file.controller");
const { verifyPermission } = require("../middleware/auth.middleware");

photoRouter.get("/getPhotos", getPhotos);
photoRouter.get("/getAllPhotos", getAllPhotos);
photoRouter.get("/:filename", photoInfo);

photoRouter.post(
  "/updatePhoto",
  verifyAuth,
  verifyPermission,
  photoHandler,
  photoResize,
  savePhotoInfo
);
photoRouter.delete(
  "/clearPhotos",
  verifyAuth,
  verifyPermission,
  clearPhotos
);

module.exports = photoRouter;
