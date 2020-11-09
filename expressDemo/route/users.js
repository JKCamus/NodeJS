/**
 * 举个例子:
 *   请求所有的用户信息: get /users
 *   请求所有的某个用户信息: get /users/:id
 *   请求所有的某个用户信息: post /users body {username: passwod:}
 *   请求所有的某个用户信息: delete /users/:id
 *   请求所有的某个用户信息: patch /users/:id {nickname: }
 */
const express = require("express");

const router = express.Router();
// 与使用路由处会形成拼接，所以，这边直接给/就行
router.get("/", (req, res, next) => {
  res.json(["camus", "jane"]);
});
router.post("/", (req, res, next) => {
  res.json("create user success~");
});
router.get("/:id", (req, res, next) => {
  res.json(`${req.params.id}用户的信息`);
});

module.exports = router;
