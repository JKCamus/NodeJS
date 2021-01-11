/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-01-11 13:36:25
 * @LastEditors: camus
 * @LastEditTime: 2021-01-11 23:26:55
 */
const fs = require("fs");
const DemoService = require("../service/demo.service");
class DemoController {
  async saveDemoInfo(ctx, next) {
    try {
      const userId = ctx.user.id;
      const files = ctx.req.files;
      const { title, preview, status } = ctx.req.body;
      const {
        filename: imgFilename,
        mimetype: imgMimetype,
        size,
      } = files.image[0];
      const { filename: htmlFilename } = files.htmlContent[0];
      const result = await DemoService.createDemoInfo(
        userId,
        title,
        preview,
        status,
        imgFilename,
        imgMimetype,
        size,
        htmlFilename
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
        const htmlContent = fs.readFileSync(
          `./uploads/demoImages/${item.htmlContent}`,
          "utf8"
        );
        return {
          ...item,
          htmlContent:htmlContent||'',
        };
      });
      ctx.body = await result;
    } catch (error) {
      console.log("DemoService.getDemoList", error);
    }
  }
}
module.exports = new DemoController();
