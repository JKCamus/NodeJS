/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-03 20:08:55
 * @LastEditors: camus
 * @LastEditTime: 2020-12-03 23:24:12
 */
const Router=require('koa-router')
const {verifyAuth} =require('../middleware/auth.middleware')
const {avatarHandler,pictureHandler,pictureResize} =require('../middleware/file.middleware')
const {saveAvatarInfo,savePictureInfo} =require('../controller/file.controller')
const fileRouter=new Router({prefix:'/upload'})
fileRouter.post('/avatar',verifyAuth,avatarHandler,saveAvatarInfo)
fileRouter.post('/picture',verifyAuth,pictureHandler,pictureResize,savePictureInfo)
module.exports = fileRouter
