/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-03 20:26:23
 * @LastEditors: camus
 * @LastEditTime: 2020-12-03 23:14:00
 */
const { APP_HOST, APP_PORT } = require("../app/config");
const fileService = require("../service/file.service");
const userService = require("../service/user.service");
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
}
module.exports = new FileController();