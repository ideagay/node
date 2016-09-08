
var dns=require('dns');

dns.lookup('www.baidu.com','A',function (err,address) {
    if (err){
        console.log(err);
        throw err;
    }
    console.log(address);
});


dns.resolve('www.baidu.com','A',function (err,address) {
    if (err){
        console.log(err);
        throw err;
    }
    console.log(address);
});

var str='';
console.log(isNaN(str));
console.log(parseFloat(str));
