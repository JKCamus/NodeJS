/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-03 20:26:23
 * @LastEditors: camus
 * @LastEditTime: 2020-12-03 21:20:53
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
}
module.exports = new FileController();
