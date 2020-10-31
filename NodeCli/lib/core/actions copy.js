const { promisify } = require("util");
const path = require("path");

/**
 * @description: 通过promisify包装的down-git-repo的callback形式转换为
 * promise形式，避免在回调里处理，发生回调地域
 * @param {*}
 * @return {*}
 * @author: camus
 */
const download = promisify(require("download-git-repo"));
const open = require("open");
const { vueRepo } = require("../config/repo-config");
const { commandSpawn } = require("../utils/terminal");
const { createDirSync, writeToFile, compile } = require("../utils/utils");
/**
 * @description: 创建项目action，拉取vueRepo地址的vue项目，并且安装依赖，打开浏览器
 * @param {*} project
 * @return {*}
 * @author: camus
 */
const createProjectAction = async (project) => {
  console.log("camus help you create your project~");
  // 1.从配置的地址clone下对应的模板，download接下载地址
  await download(vueRepo, project, { clone: true });
  // 2. 执行npm install,并且等待当前任务完成
  /* 环境判断，如果是windows则，使用npm.cmd 在linux和mac上会运行npm*/
  // 在process里面可以对运行平台进行判断
  const command = process.platform === "win32" ? "npm.cmd" : "npm";
  await commandSpawn(command, ["install"], { cwd: `./${project}` });
  /*当安装完依赖，当前进程并不会结束， */
  commandSpawn(command, ["run", "serve"], { cwd: `./${project}` });
  open("http://localhost:8080/");
};

/* 优雅抽离 组件*/
const handleEjsToFile = async (name, dest, template, fileName) => {
  /* 获取模块引擎 */
};

/**
 * @description: 根据对应ejs模板创建对应的组件，可以自定义创建组件的地址
 * @param {*} name
 * @param {*} dest
 * @return {*}
 * @author: camus
 */
const addComponentAction = async (name, dest) => {
  /* 1.等待编译模板的结果，传入参数为自定义的组件名字 */
  const result = await compile("vue-component.ejs", {
    name,
    lowerName: name.toLowerCase(),
  });
  /* 2.写入文件的操作 ,拿到编译后的模板，写入对应的地址，难点就是获取准确的地址*/
  // const targetPath = path.resolve(dest, `${name}.vue`);
  // writeToFile(targetPath, result);
  /* 没有文件夹创建 如果需要创建一个文件夹，需要额外再赋值一个文件地址中转，如添加pages的targetDest*/
  if (createDirSync(dest)) {
    const targetComponentPath = path.resolve(dest, `${name}.vue`);
    writeToFile(targetComponentPath, result);
  }
};
/**
 * @description: 根据对应组件模板和router模板生成page页，包含路由等，并且无父文件，会新建符文件
 * @param {*} name
 * @param {*} dest
 * @return {*}
 * @author: camus
 */
const addPageAndRouteAction = async (name, dest) => {
  const data = { name, lowerName: name.toLowerCase() };
  const pageResult = await compile("vue-component.ejs", data);
  const routeResult = await compile("vue-router.ejs", data);

  /*判断是否有对应的文件，没有，创建 */
  const targetDest = path.resolve(dest, name.toLowerCase());
  if (createDirSync(targetDest)) {
    const targetPagePath = path.resolve(targetDest, `${name}.vue`);
    const targetRoutePath = path.resolve(targetDest, "router.js");
    writeToFile(targetPagePath, pageResult);
    writeToFile(targetRoutePath, routeResult);
  }
};

module.exports = {
  createProjectAction,
  addComponentAction,
  addPageAndRouteAction,
};
