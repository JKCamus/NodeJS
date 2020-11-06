const http = require("http");
const serve1 = http.createServer((req, res) => {
  // request对象中封装了客户端给我们服务器传递过来的所有信息
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  res.end("serve1");
});

serve1.listen(8001, () => {
  console.log("server1启动成功~");
});
