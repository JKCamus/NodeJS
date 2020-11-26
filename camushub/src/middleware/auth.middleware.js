/*
 * @Description:登录验证中间件
 * @version:
 * @Author: camus
 * @Date: 2020-11-26 11:04:11
 * @LastEditors: camus
 * @LastEditTime: 2020-11-26 15:45:50
 */
const errorTypes = require("../constants/error-types");
const service = require("../service/user.service");
const md5password = require("../utils/password-handle");
/**
 * @description: 登录验证
 * @param {*} async
 * @param {*} next
 * @return {*}
 * @author: camus
 */
const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  if (!name || !password) {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit("error", error, ctx);
  }
  //判断用户是否存在,
  const result = await service.getUserByName(name);
  const user = result[0];
  // 与注册接口区分，这边需要判断不存在，抛出异常
  if (!user) {
    const error = new Error(errorTypes.USER_DOES_NOT_EXISTS);
    return ctx.app.emit("error", error, ctx);
  }
  // 4.判断密码是否一致（加密后），将当前的密码也做加密并和数据库中的对比
  if (md5password(password) !== user.password) {
    const error = new Error(errorTypes.PASSWORD_IS_INCORRECT);
    return ctx.app.emit("error", error, ctx);
  }

  await next();
};
module.exports = {
  verifyLogin,
};
