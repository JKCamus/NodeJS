/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-01-11 13:36:25
 * @LastEditors: camus
 * @LastEditTime: 2021-01-14 14:14:53
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
      // image/gif
      // console.log('imgMimetype', imgMimetype)
      const { filename: htmlFilename } = files.htmlContent[0];

      // console.log('imgFilename',imgFilename )
      // console.log('imgMimetype',imgMimetype )
      // 所有图片上传需要再做一层判断，判断是否是是jpg等图像文件
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
  //? 转存为buffer版本，但是会造成跨域渲染iframe 不好弄
  // async getDemoList(ctx, next) {
  //   try {
  //     const { size, page } = ctx.query;
  //     if (!size || !page) throw new Error();
  //     const res = await DemoService.getDemoList(page, size);
  //     const result = res.map((item) => {
  //       return {
  //         ...item,
  //         htmlContent: `${Buffer.from(item.htmlContent)}`,
  //       };

  //     });
  //     ctx.body = await result;
  //   } catch (error) {
  //     console.log("DemoService.getDemoList", error);
  //   }
  // }
  async getDemoList(ctx, next) {
    try {
      const { size, page } = ctx.query;
      if (!size || !page) throw new Error();
      const res = await DemoService.getDemoList(page, size);
      const result = res.map((item) => {
        const htmlContent = fs.readFileSync(
          `./uploads/demoFiles/${item.htmlName}`,
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
