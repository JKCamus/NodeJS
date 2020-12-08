/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-03 20:08:55
 * @LastEditors: camus
 * @LastEditTime: 2020-12-07 23:00:44
 */
const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth.middleware");
const {
  avatarHandler,
  pictureHandler,
  pictureResize,
  photoHandler,
  photoResize,
} = require("../middleware/file.middleware");
const {
  saveAvatarInfo,
  savePictureInfo,
  savePhotoInfo,
} = require("../controller/file.controller");
const fileRouter = new Router({ prefix: "/upload" });
fileRouter.post("/avatar", verifyAuth, avatarHandler, saveAvatarInfo);
fileRouter.post(
  "/picture",
  verifyAuth,
  pictureHandler,
  pictureResize,
  savePictureInfo
);
fileRouter.post(
  "/upLoadPhoto",
  verifyAuth,
  photoHandler,
  photoResize,
  savePhotoInfo
);
module.exports = fileRouter;
