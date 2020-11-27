/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-11-25 09:59:15
 * @LastEditors: camus
 * @LastEditTime: 2020-11-27 15:09:40
 */
const errorTypes = require("../constants/error-types");
/**
 * @description: 根据错误类型选择需要发送的错误警告
 * @param {*} error
 * @param {*} ctx
 * @return {*}
 * @author: camus
 */
const errorHandler = (error, ctx) => {
  let status, message;
  /* 注意是error.message一个参数 */
  switch (error.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400;
      message = "用户或者密码不能为空";
      break;
    case errorTypes.USER_ALREADY_EXISTS:
      status = 409; //conflict
      message = "已存在当前用户名";
      break;
    case errorTypes.USER_DOES_NOT_EXISTS:
      status = 400;
      message = "当前用户不存在";
      break;
    case errorTypes.PASSWORD_IS_INCORRECT:
      status = 400;
      message = "密码不正确";
      break;
    case errorTypes.UNAUTHORIZED:
      status = 401;
      message = "无效token";
      break;
    default:
      status = 404;
      message = "NOT FOUND";
      break;
  }
  ctx.status = status;
  ctx.body = message;
};
module.exports = errorHandler;
