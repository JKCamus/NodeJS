/**
 * @description: 执行终端命令相关
 * @param {*}
 * @return {*}
 * @author: camus
 */
/* exec,spawn 都可以，spawn偏向底层，exec对spawn进行了封装 */
const { spawn } = require("child_process");
const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    /* 原本是直接传入回调函数，但是依然容易产生回调地狱，所以，在上面直接return promise */
    const childProcess = spawn(...args);
    /* 当前进程打印的信息会出现在别的窗口，是不希望这样的。需要 */
    /* 通过stdout输出流，通过stdout.pipe()将另外一个的进程信息，放到当前信息 */
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
    /**
     * @description: 用于回应已经执行完，并且阻塞后续进程
     * @param {*}
     * @return {*}
     * @author: camus
     */
    childProcess.on("close", () => {
      /* 原本是直接传入回调函数，但是依然容易产生回调地狱，所以，
      在上面直接return promise */
      resolve();
    });
  });
};
module.exports = {
  commandSpawn,
};
