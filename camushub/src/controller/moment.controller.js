/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-11-27 16:35:38
 * @LastEditors: camus
 * @LastEditTime: 2020-11-27 22:16:33
 */
const momentService = require("../service/moment.service");
class MomentController {
  async create(ctx, next) {
    // ctx.body="创建动态成功"
    const userId = ctx.user.id;
    const content = ctx.request.body.content;
    const result = await momentService.create(userId, content);
    ctx.body = result;
  }

  async detail(ctx, next) {
    const momentId = ctx.params.momentId;
    const result = await momentService.getMomentById(momentId);
    ctx.body = result;
  }
  async getList(ctx, next) {
    const { page, size } = ctx.query;
    const result = await momentService.getMomentList(page, size);
    ctx.body = result;
  }
}
module.exports = new MomentController();
