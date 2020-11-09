const express = require('express');

const app = express();

/* 直接将打包好的静态服务器部署 */
app.use(express.static('./build'));

app.listen(8000, () => {
  console.log("路由服务器启动成功~");
});
