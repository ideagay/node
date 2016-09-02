
var str='hyb\'s world';
console.log(str);
var buf=new Buffer(str,'utf-8');
console.log(buf);

console.log(buf.toString());
