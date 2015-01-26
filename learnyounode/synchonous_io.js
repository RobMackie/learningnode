
var fs = require('fs')

var filename = process.argv[2];

var buffer = fs.readFileSync(filename);
var string = buffer.toString();
var string_array = string.split('\n');

console.log(string_array.length - 1);
