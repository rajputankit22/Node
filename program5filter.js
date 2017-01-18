var fs = require('fs');
var tx = process.argv[3];

fs.readdir(process.argv[2],'utf8', function(err, list) {
   if (err)
     console.log('error occurred');
   else
   {
     var name =list.filter(function (nm) {
        return (nm.split('.')[1] == tx);

     });
     console.log(name);
      }
});
