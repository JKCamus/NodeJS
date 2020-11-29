const commentService = require("../service/comment.service");

/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-11-29 14:04:56
 * @LastEditors: camus
 * @LastEditTime: 2020-11-29 14:33:33
 */
const CommentService = require("../service/comment.service");
class CommentController {
  async create(ctx, next) {
    try {
      const { id } = ctx.user;
      const { content,momentId} = ctx.request.body;
      const result = await CommentService.create(content, momentId, id);
      ctx.body = result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CommentController();
