const path = require("path");
const fs = require("fs");
const ejs = require("ejs");

/**
 * @description: 编译模板方法，用于编译写好的vue，js等模板
 * @param {*} templateName
 * @param {*} data
 * @return {*}
 * @author: camus
 */
const compile = (templateName, data) => {
  const templatePosition = `../templates/${templateName}`;
  const templatePath = path.resolve(__dirname, templatePosition);
  /*   直接使用Promise包而不用promisify是因为，
  这边做的比较简单 只需要等待返回结果就行，而不至于再回调等 */
  return new Promise((resolve, reject) => {
    /* {data}因为在模板中我们给的是data.lowerName，所以这边是直接传data */
    ejs.renderFile(templatePath, { data }, {}, (err, res) => {
      if (err) {
        console.log("打印错误", err);
        reject(err);
        return;
      }
      resolve(res);
    });
  });
};

/**
 * @description: 通过判断是否有父级文件，递归创建文件夹，从子判断到父，然后从父生成文件夹到子
 * @param {*} pathName
 * @return {*}
 * @author: camus
 */
// source/components/category/hello
const createDirSync = (pathName) => {
  if (fs.existsSync(pathName)) {
    return true;
  } else {
    /* dirname直接拿到父级文件路径 */
    if (createDirSync(path.dirname(pathName))) {
      // 存在父亲文件，就直接新建该文件
      fs.mkdirSync(pathName);
      return true;
    }
  }
};

/**
 * @description:  判断path是否存在，如果不存在，创建对应的文件夹
 * @param {*} path
 * @param {*} content
 * @return {*}
 * @author: camus
 */
const writeToFile = (path, content) => {
  if (fs.existsSync(path)) {
    log.error("the file already exists~");
    return;
  }
  return fs.promises.writeFile(path, content);
};

module.exports = {
  createDirSync,
  writeToFile,
  compile,
};
