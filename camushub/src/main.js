/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-11-24 16:42:34
 * @LastEditors: camus
 * @LastEditTime: 2020-11-24 16:54:22
 */
const Koa = require("koa");
const app = new Koa();
// 最好不要在程序里写死，避免泄露并且更加易于维护
app.listen(8888, () => {
  console.log("camushub start");
});
