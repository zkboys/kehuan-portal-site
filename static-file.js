const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function md5(str) {
    const md5sum = crypto.createHash('md5');
    md5sum.update(str);
    str = md5sum.digest('hex');
    return str;
}

const staticFileMap = {};
module.exports = function (filePath) {

    if (staticFileMap[filePath]) { // 使用缓存
        const md5Str = staticFileMap[filePath];
        return filePath + '?v=' + md5Str;
    }

    let fileStr = new Date().getTime();
    try {
        fileStr = fs.readFileSync(path.join(__dirname, filePath));
    } catch (e) {
        console.error('No such static file : ' + filePath);
    }
    const md5Str = md5(fileStr);
    staticFileMap[filePath] = md5Str;
    return filePath + '?v=' + md5Str;
}