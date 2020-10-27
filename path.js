const fs = require("fs");
const path = require("path");
/**
 * @description: path
 * @param {*}
 * @return {*}
 * @author: camus
 */
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
// // const content='你好，李银河'
// // fs.writeFile('./abc.txt',content,err=>{
// //   console.log(err);
// // })
// /* 新建文件夹 */
const dirname = "./camus";
// if (!fs.existsSync(dirname)) {
//   fs.mkdir(dirname, err => {
//     console.log(err);
//   });
// }
/**
 * @description: 递归读取文件夹的所有文件
 * @param {*}
 * @return {*}
 * @author: camus
 */
function getFiles(dirname) {
  fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
    for (let file of files) {
      //   fs.stat(file)可以，但是很麻烦
    //   console.log("file", file);
      /* 判断是否是文件夹 */
      if (file.isDirectory()) {
        const filePath = path.resolve(dirname, file.name);
        getFiles(filePath);
      } else {
        console.log(file.name);
      }
    }
  });
}
getFiles(dirname);
