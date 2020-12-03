/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-03 20:15:39
 * @LastEditors: camus
 * @LastEditTime: 2020-12-03 20:23:03
 */
const { path } = require("path");
const Multer = require("koa-multer");

const Jimp = require("jimp");
const { AVATAR_PATH, PICTURE_PATH } = require("../constants/file.path");
// 头像上传地址
const avatarUpload = Multer({
  dest: AVATAR_PATH,
});
const avatarHandler = avatarUpload.single("avatar");

module.exports = {
  avatarHandler,
};
