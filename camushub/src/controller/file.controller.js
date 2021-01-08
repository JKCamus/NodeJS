/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-03 20:26:23
 * @LastEditors: camus
 * @LastEditTime: 2021-01-08 12:31:20
 */
const { APP_HOST, APP_PORT } = require("../app/config");
const fileService = require("../service/file.service");
const userService = require("../service/user.service");
const errorTypes = require("../constants/error-types");

class FileController {
  async saveAvatarInfo(ctx, next) {
    try {
      //
      const { filename, mimetype, size } = ctx.req.file;
      const { id } = ctx.user;
      const result = await fileService.createAvatar(
        filename,
        mimetype,
        size,
        id
      );
      const avatarUrl = `${APP_HOST}:${APP_PORT}/users/${id}/avatar`;
      await userService.updateAvatarUrlById(avatarUrl, id);

      ctx.body = "上传头像成功";
    } catch (error) {
      console.log("FileController.saveAvatarInfo", error);
    }
  }
  async savePictureInfo(ctx, next) {
    try {
      // 获取图像信息
      const files = ctx.req.files;
      const { id } = ctx.user;
      const { momentId } = ctx.query;
      // 将所有的文件信息保存到数据集中
      for (let file of files) {
        const { filename, mimetype, size } = file;
        await fileService.createFile(filename, mimetype, size, id, momentId);
      }
      ctx.body = "动态配图上传完成~";
    } catch (error) {
      console.log("FileController.savePictureInfo", error);
    }
  }
  async savePhotoInfo(ctx, next) {
    try {
      // 获取图像信息
      const file = ctx.req.file;
      const {content,title,width}=ctx.req.body
      if (!file) {
        const error = new Error(errorTypes.INVALID_PICTURE);
        return ctx.app.emit("error", error, ctx);
      }
      // 将所有的文件信息保存到数据集中
        const { filename, mimetype, size } = file;
        await fileService.createPhoto(filename, mimetype, size,title,content,width);
      ctx.body = "picture-gallery upload success~";
    } catch (error) {
      console.log("FileController.savePhoto", error);
    }
  }
}
module.exports = new FileController();
