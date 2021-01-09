/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-03 20:15:39
 * @LastEditors: camus
 * @LastEditTime: 2021-01-08 14:08:35
 */
const path = require("path");
const Multer = require("koa-multer");

const Jimp = require("jimp");
const {
  AVATAR_PATH,
  PICTURE_PATH,
  PHOTO_PATH,
} = require("../constants/file.path");
// 头像上传地址
const avatarUpload = Multer({
  dest: AVATAR_PATH,
});
const avatarHandler = avatarUpload.single("avatar");

const pictureUpload = Multer({
  dest: PICTURE_PATH,
});
const pictureHandler = pictureUpload.array("picture", 9);

const pictureResize = async (ctx, next) => {
  try {
    // 获取所有的图片信息
    const files = ctx.req.files;
    // 对图像进行处理（sharp,jimp）
    for (let file of files) {
      console.log("file", file);
      const destPath = path.join(file.destination, file.filename);
      // console.log("destPath", destPath);
      Jimp.read(file.path).then((image) => {
        image.resize(1280, Jimp.AUTO).write(`${destPath}-large`);
        image.resize(640, Jimp.AUTO).write(`${destPath}-middle`);
        image.resize(320, Jimp.AUTO).write(`${destPath}-small`);
      });
    }
    await next();
  } catch (error) {
    console.log("pictureResize", error);
  }
};

const photoUpload = Multer({
  dest: PHOTO_PATH,
});
const photoHandler = photoUpload.single("photo");

const photoResize = async (ctx, next) => {
  try {
    // 获取所有的图片信息
    const file = ctx.req.file;
    // 对图像进行处理（sharp,jimp）
      const destPath = path.join(file.destination, file.filename);
      // console.log("destPath", destPath);
      Jimp.read(file.path).then((image) => {
        image.resize(1280, Jimp.AUTO).write(`${destPath}-large`);
        image.resize(640, Jimp.AUTO).write(`${destPath}-middle`);
        image.resize(320, Jimp.AUTO).write(`${destPath}-small`);
      });
    await next();
  } catch (error) {
    console.log("photoResize", error);
  }
};







module.exports = {
  avatarHandler,
  pictureResize,
  pictureHandler,
  photoHandler,
  photoResize
};
