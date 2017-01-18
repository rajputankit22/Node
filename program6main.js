var path = process.argv[2];
var type = process.argv[3];
var mymodule = require('./program6.js');
mymodule(path, type, function(err, data) {
  //if (err) console.log("Error: " + err);
  data.forEach(function(v){
    console.log(v);
  });
});
