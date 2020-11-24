/*
 * @Description:user的具体处理逻辑
 * @version:
 * @Author: camus
 * @Date: 2020-11-24 21:11:40
 * @LastEditors: camus
 * @LastEditTime: 2020-11-24 22:00:23
 */
const service=require('../service/user.service')
/**
 * @description: 创建一个类，里面有一个对象方法，可以在router里直接使用
 * @param {*}
 * @return {*}
 * @author: camus
 */
class UserController {
  /* 用于异步操作数据库 */
  async create(ctx, next) {
    /* 获取用户参数 */
    /* 这边的user为通过koa-bodyparser库解析后放入中间件中的*/
    const user = ctx.request.body;
    /* 查询数据 */
    const result = await service.create(user);
    // 返回数据
    ctx.body = result;
  }
}
module.exports = new UserController();
