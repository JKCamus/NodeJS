/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-01-11 13:30:35
 * @LastEditors: camus
 * @LastEditTime: 2021-01-16 20:01:46
 */
const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth.middleware");
const { demoFieldsHandle } = require("../middleware/file.middleware");

const { saveDemoInfo,getDemoList } = require("../controller/demo.controller");
const demoRouter = new Router({ prefix: "/demo" });

demoRouter.post("/uploadDemo", verifyAuth, demoFieldsHandle, saveDemoInfo);
demoRouter.get("/getDemoList", getDemoList);

module.exports = demoRouter;
