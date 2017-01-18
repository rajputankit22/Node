var fs = require('fs');
var tx = process.argv[3];
fs.readdir(process.argv[2],'utf8', function(err, list) {
   if (err)
     console.log('error occurred');
   else
   {
   list.forEach(function(name)
      {
        if(name.split('.')[1]==tx)
        console.log(name);
      });

      }
});
