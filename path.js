/**
 * @description: path
 * @param {*}
 * @return {*}
 * @author: camus
 */
// const path = require("path");
// const basePath1 = "User/camus";
// const basePath = "/User/camus";
// const fileName = "abc.text";
// const filePath = path.resolve(basePath, fileName);
// const filePathA = path.resolve(basePath1, fileName);
// const filePath1=path.join(basePath,fileName)
// console.log("filePath", filePath);
// console.log("filePathA", filePathA);
// console.log("filePath1", filePath1);
/**
 * @description: 读写
 * @param {*}
 * @return {*}
 * @author: camus
 */
const fs = require("fs");
// const content='你好，李银河'
// fs.writeFile('./abc.txt',content,err=>{
//   console.log(err);
// })
const dirname = "./camus";
if (!fs.existsSync(dirname)) {
  fs.mkdir(dirname, err => {
    console.log(err);
  });
}
