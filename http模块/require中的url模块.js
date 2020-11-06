const http = require("http");
/* 地址模块，用于解析地址相关 */
const url = require("url");
/* querystring 用于解析get请求后的query参数 */
const qs = require("querystring");

const serve1 = http.createServer((req, res) => {
  /**
   * @description: 很low，会出错
   * @param {*}
   */
  // 最基本的使用方式
  // if (req.url === '/login') {
  //   res.end("欢迎回来~");
  // } else if (req.url === '/users') {
  //   res.end("用户列表~");
  // } else {
  //   res.end("错误请求, 检查~");
  // }
  const { pathname, query } = url.parse(req.url);
  if (pathname === "/login") {
    console.log(query);
    console.log(qs.parse(query));
    const { username, password } = qs.parse(query);
    console.log(username, password);
    res.end("请求结果");
  }
  // res.end("serve1");
});

serve1.listen(8001, "0.0.0.0", () => {
  console.log("服务器启动成功~");
});
