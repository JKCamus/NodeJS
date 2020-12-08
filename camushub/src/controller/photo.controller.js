/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-07 23:22:17
 * @LastEditors: camus
 * @LastEditTime: 2020-12-08 13:30:25
 */
const fs = require("fs");
const fileService = require("../service/file.service");
const { PHOTO_PATH } = require("../constants/file.path");
class PhotoController {
  async getPhotos(ctx, next) {
    try {
      const { size, page } = ctx.query;
      if (!size || !page) throw new Error();
      const result = await fileService.getPhotoList(page, size);
      ctx.body = result;
    } catch (error) {
      console.log("PhotoController.create", error);
    }
  }
  async photoInfo(ctx, next) {
    try {
      let { filename } = ctx.params;
      const fileInfo = await fileService.getFilePhotoByUrl(filename);
      if (!fileInfo) throw new Error();
      // console.log("fileInfo", fileInfo);
      const { type } = ctx.query;
      const types = ["small", "middle", "large"];
      if (types.some((item) => item === type)) {
        filename = filename + "-" + type;
      }
      ctx.response.set("content-type", fileInfo.mimetype);
      ctx.body = fs.createReadStream(`${PHOTO_PATH}/${filename}`);
    } catch (error) {
      console.log("PhotoController.fileInfo", error);
    }
  }
}
module.exports = new PhotoController();
