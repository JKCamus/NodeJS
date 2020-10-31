const EventEmitter = require("events");
/* 1. 创建发射器 */
const emitter = new EventEmitter();
/* 2. 监听某一个事件 */
// addListener是on的别名
emitter.on("click", (args) => {
  console.log("监听1到click事件", args);
});
const listener2 = (args) => {
  console.log("监听到2事件", args);
};
emitter.on("click", listener2);

setTimeout(() => {
  emitter.emit("click", "camus", "love");
  /* 关闭事件2监听，后面跟函数*/
  emitter.off("click", listener2);
  emitter.emit("click", "camus", "love");
}, 2000);

emitter.on("tap", (args) => {
  console.log(args);
});
/* 获取注册事件 */
console.log(emitter.eventNames());
// 获取监听的次数
console.log(emitter.listenerCount("click"));
// 获取监听函数数组
console.log(emitter.listeners("click"));
