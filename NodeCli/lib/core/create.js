const program = require("commander");
const {
  createProjectAction,
  addComponentAction,
  addPageAndRouteAction,
} = require("./actions");

const createCommands = () => {
  /* [other...]表示执行create demo 后面还可以再跟别的参数 */
  /* 每个action抽离，避免整个代码块臃肿 */
  program
    .command("create <project> [other...]")
    .description("clone a repository into a folder")
    .action(createProjectAction);

  program
    .command("addcpn <name>")
    .description(
      "add vue component,eg: camus addcpn HelloWorld [-d src/components]"
    )
    /* program.dest里含有地址信息，不传递地址，为 */
    .action((name) => {
      addComponentAction(name, program.dest || "src/components");
    });

  program
    .command("addpage <page>")
    .description(
      "add vue page and router config,eg: camus addpage Home [-d src/pages]"
    )
    .action((page) => {
      addPageAndRouteAction(page, program.dest || "src/pages");
    });
};

module.exports = createCommands;
