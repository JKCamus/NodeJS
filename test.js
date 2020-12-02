/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-02 23:14:51
 * @LastEditors: camus
 * @LastEditTime: 2020-12-02 23:53:00
 */
const fs = require("fs");
const path = require("path");
let readDir = fs.readdirSync("./");
for (let del of readDir) {
    if (del.indexOf("(1)") > 0) {
    console.log("del", path.resolve(__dirname, del));
    fs.unlink(path.resolve(__dirname, del), (err) => {
        if (err) throw err;
    });
    }
}

