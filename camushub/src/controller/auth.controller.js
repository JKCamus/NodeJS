/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-11-26 11:07:01
 * @LastEditors: camus
 * @LastEditTime: 2020-11-26 11:38:05
 */
class AuthController {
  async login(ctx, next) {
    const { name } = ctx.request.body;
    ctx.body = `登录成功，欢迎${name}回来~`;
  }
}
module.exports =new AuthController();
