const express = require("express");

const app = express();

const USERNAME_DOES_NOT_EXISTS = "USERNAME_DOES_NOT_EXISTS";
const USERNAME_ALREADY_EXISTS = "USERNAME_ALREADY_EXISTS";
/* 注释掉的代码部署不能用，是因为这样写逻辑很混乱，且冗余
可以将所有错误处理放在一起处理，调用next传入错误信息
next不带参数就是直接执行下一个中间件，携带参数就是直接执行错误中间件
 */
app.post("/login", (req, res, next) => {
  // 加入在数据中查询用户名时, 发现不存在
  const isLogin = false;
  if (isLogin) {
    res.json("user login success~");
  } else {
    // res.type(400);
    // res.json("username does not exists~")
    next(new Error(USERNAME_DOES_NOT_EXISTS));
  }
});

app.post("/register", (req, res, next) => {
  // 加入在数据中查询用户名时, 发现不存在
  const isExists = true;
  if (!isExists) {
    res.json("user register success~");
  } else {
    // res.type(400);
    // res.json("username already exists~")
    next(new Error(USERNAME_ALREADY_EXISTS));
  }
});

/* 当有四个参数的时候，为处理错误的中间件 */
app.use((err, req, res, next) => {
  let status = 400;
  let message = "";
  console.log(err.message);

  switch (err.message) {
    case USERNAME_DOES_NOT_EXISTS:
      message = "username does not exists~";
      break;
    case USERNAME_ALREADY_EXISTS:
      message = "USERNAME_ALREADY_EXISTS~";
      break;
    default:
      message = "NOT FOUND~";
  }

  res.status(status);
  res.json({
    errCode: status,
    errMessage: message,
  });
});

app.listen(8000, () => {
  console.log("路由服务器启动成功~");
});
