const http = require("http");
/**
 * @description: 创建服务
 * 分为：1.通过node包装后的http模块创建。2.通过原生的http类创建
 * 效果一样，因为在，node包装的http模块也是直接返回http类
 * @param {*}
 */
/* 通过node模块创建 */
const serve1 = http.createServer((req, res) => {
  res.end("serve1");
});
/* 通过原生http创建 */
const server2 = new http.Server((req, res) => {
  res.end("Server2");
});
/**
 * @description:
 * @param {*}参数包括，端口，主机，地址，均为可选参数
 * 主机默认可以用0.0.0.0自动解析所有端口
 * 端口避免写1024以下的端口，通常为系统所用，通常用1024-65535
 * listen为异步函数，想知道服务器是否启动成功，需要在回调里面，而不是在函数的下一行
 * localhost:本质上是一个域名，通常情况下会被解析成127.0.0.1
 * 127.0.0.1：回环地址，表达意识是我们主机自己发出去的包，直接被自己接受
 * 
 * 
 */
serve1.listen( () => {
  console.log("serve1启动成功");
  /* 不传，则会分配随机端口号， 此时可以它能够给下面方法获取当前端口*/
  console.log(serve1.address().port);
});
server2.listen(8001, () => {
  console.log("server2启动成功~");
});
