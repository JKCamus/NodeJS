const program = require('commander');
const { createProjectAction } = require("./actions");

const createCommands = () => {
  /* [other...]表示执行create demo 后面还可以再跟别的参数 */
  program
    .command("create <project> [other...]")
    .description("clone a repository into a folder")
    .action(createProjectAction);
};

module.exports = createCommands;
