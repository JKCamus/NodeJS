/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-07 23:21:10
 * @LastEditors: camus
 * @LastEditTime: 2021-01-09 21:10:40
 */
const Router = require("koa-router");
const photoRouter = new Router({ prefix: "/photo" });
const { getPhotos, photoInfo,getAllPhotos,clearPhotos } = require("../controller/photo.controller");
const { verifyAuth } = require("../middleware/auth.middleware");
const {
  photoHandler,
  photoResize,
} = require("../middleware/file.middleware");
const {
  savePhotoInfo,
} = require("../controller/file.controller");
photoRouter.get("/getPhotos", getPhotos);
photoRouter.get("/getAllPhotos", getAllPhotos);
photoRouter.get("/:filename", photoInfo);

photoRouter.post('/updatePhoto',
verifyAuth,
photoHandler,
photoResize,
savePhotoInfo
)
photoRouter.delete('/clearPhotos',
verifyAuth,
clearPhotos
)


module.exports = photoRouter;
