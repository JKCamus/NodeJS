/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-01-11 13:36:25
 * @LastEditors: camus
 * @LastEditTime: 2021-01-12 21:17:03
 */
const fs = require("fs");
const DemoService = require("../service/demo.service");
class DemoController {
  async saveDemoInfo(ctx, next) {
    try {
      const userId = ctx.user.id;
      const file = ctx.req.file;
      const { title, preview, status, htmlContent } = ctx.req.body;
      const { filename: imgFilename, mimetype: imgMimetype, size } = file;
      const result = await DemoService.createDemoInfo(
        userId,
        title,
        preview,
        status,
        imgFilename,
        imgMimetype,
        size,
        htmlContent
      );
      ctx.body = "saveDemoInfo success~";
    } catch (error) {
      console.log("DemoController.saveDemoInfo", error);
    }
  }
  async getDemoList(ctx, next) {
    try {
      const { size, page } = ctx.query;
      if (!size || !page) throw new Error();
      const res = await DemoService.getDemoList(page, size);
      const result = res.map((item) => {
        return {
          ...item,
          htmlContent: `${Buffer.from(item.htmlContent)}`,
        };
      });
      ctx.body = await result;
    } catch (error) {
      console.log("DemoService.getDemoList", error);
    }
  }
}
module.exports = new DemoController();
