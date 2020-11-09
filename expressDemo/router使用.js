const express = require("express");
const userRouter = require("./route/users");
const app = express();

app.use("/users", userRouter);
app.listen(8000, () => {
  console.log("路由测试服务器启动成功~");
});
