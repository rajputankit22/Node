module.exports = directoryReader;


function directoryReader(dir, filter, callback) {

    var fs = require('fs');

    fs.readdir(dir, function (err, list) {
        var newList = [];
    if (err)
        return callback(err);

        for (var i = 0, filename; filename = list[i++];) {
            if (filename.indexOf('.' + filter) == filename.length - filter.length - 1 && filename !== filter) {
                newList.push(filename);
            }
        }

        return callback(null, newList);
    });

};
