/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-03 20:15:39
 * @LastEditors: camus
 * @LastEditTime: 2021-01-11 15:59:04
 */
const path = require("path");
const Multer = require("koa-multer");

const Jimp = require("jimp");
const {
  AVATAR_PATH,
  PICTURE_PATH,
  PHOTO_PATH,
  DEMO_IMAGE_PATH,
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

/**
 * @description: 单图上传
 */
const photoUpload = Multer({
  dest: PHOTO_PATH,
});
const photoHandler = photoUpload.single("photo");

/**
 * @description: 多存在种尺寸
 * @param {*} next
 */
const photoResize = async (ctx, next) => {
  try {
    const file = ctx.req.file;
    if (file) {
      // 获取所有的图片信息
      // 对图像进行处理（sharp,jimp）
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
    console.log("photoResize", error);
  }
};

/**
 * @description: demo图片上传
 */
const demoImageUpload = Multer({
  dest: DEMO_IMAGE_PATH,
});
// 多文件不同名字上传文件
const demoFieldsHandle = demoImageUpload.fields([
  { name: "image", maxCount: 1 },
  { name: "htmlContent", maxCount: 1 },
]);

// const demoImageHandle = demoImageUpload.array("files", 2);

module.exports = {
  avatarHandler,
  pictureResize,
  pictureHandler,
  photoHandler,
  photoResize,
  // demoImageHandle,
  demoFieldsHandle
};
