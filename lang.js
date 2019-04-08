const fs = require('fs');
const path = require('path');
const sourceWorkPath = path.resolve('./src');

function walkFilesSync(fileDir) {
    const files = fs.readdirSync(fileDir);
    for (let index = 0; index < files.length; index++) {
        let fileName = files[index];
        const filePath = path.join(fileDir, fileName);
        const stats = fs.statSync(filePath);

        if (stats.isFile() && fileName.indexOf('.js') > -1) {
            findChinese(filePath);
        } else if (stats.isDirectory()) {
            walkFilesSync(filePath);
        }
    }
}

var langData  = {};
function findChinese(filePath) {
    
    var data = fs.readFileSync(filePath, {
        encoding: 'utf-8'
    });

    var matches = data.match(/\"[\u4e00-\u9fa5].*\"/ig);
    if (matches) {
        for (var i = 0; i < matches.length; i++) {
            var element = matches[i];
            if (element) {
                console.log(element);
                langData[element] = element;
            }
        }
    }
    
}


walkFilesSync(sourceWorkPath);

console.log(langData)