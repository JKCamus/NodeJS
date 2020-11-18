#!/usr/bin/env node
/* 上面！后面可以是绝对路径 */
const program = require("commander");
/* require不但可以加载js文件，也可以加载json等文件
如果读取的是json文件，则会拿到最外层的对象，借此，可以拿到version等属性
program.version(require("./package.json").version);
后面可以跟第二个参数，没有配置，只能通过大写的V进行版本查看，添加如下，则可以通过小写配置
 */
const helpOptions = require("./lib/core/help");
const createCommands = require("./lib/core/create");
/* 满足-V和-v都可以使用 */
// program.version(require("./package.json").version);
program.version(require("./package.json").version, "-v, --version");
helpOptions();
createCommands();
program.parse(process.argv);
