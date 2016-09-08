//加密
var crypto=require('crypto');

var md5=crypto.createHash('md5');

var str='hanyongbin';

var p=md5.update(str).digest('md5');

console.log(p);
