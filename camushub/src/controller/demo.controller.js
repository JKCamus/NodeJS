/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-01-11 13:36:25
 * @LastEditors: camus
 * @LastEditTime: 2021-01-16 19:55:00
 */
const fs = require("fs");
const DemoService = require("../service/demo.service");
class DemoController {
  async saveDemoInfo(ctx, next) {
    try {
      const userId = ctx.user.id;
      const files = ctx.req.files;
      const { title, preview, status, htmlName, id } = ctx.req.body;
      if (id) {
        const imgFilename = files.image && files.image[0].filename;
        const imgMimetype = files.image && files.image[0].mimetype;
        let htmlFilename = "";
        if (files.htmlContent) {
          htmlFilename = files.htmlContent && files.htmlContent[0].filename;
        } else {
          htmlFilename = ctx.req.body.htmlName || "";
        }
        const updateData = {
          id,
          title,
          preview,
          status,
          imgFilename,
          imgMimetype,
          htmlFilename,
        };
        await DemoService.updateDemo(updateData);
        ctx.body = "Update Note Success~";
      } else {
        const { filename: imgFilename, mimetype: imgMimetype } = files.image[0];
        const htmlFilename = files.htmlContent && files.htmlContent[0].filename;
        const result = await DemoService.createDemoInfo(
          userId,
          title,
          preview,
          status,
          imgFilename,
          imgMimetype,
          htmlFilename
        );
        ctx.body = "Create Note success~";
      }

      // image/gif
      // console.log('imgMimetype', imgMimetype)

      // console.log('imgFilename',imgFilename )
      // console.log('imgMimetype',imgMimetype )
      // 所有图片上传需要再做一层判断，判断是否是是jpg等图像文件
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
        const htmlContent =
          item.htmlName &&
          fs.readFileSync(`./uploads/demoFiles/${item.htmlName}`, "utf8");
        return {
          ...item,
          htmlContent: htmlContent || "",
          htmlUrl: item.htmlName ? item.htmlUrl : "",
        };
      });
      ctx.body = await result;
    } catch (error) {
      console.log("DemoService.getDemoList", error);
    }
  }
}
module.exports = new DemoController();
