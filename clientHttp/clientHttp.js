var http=require('http');

var options={
    hostname:'10.10.13.45',
    port:'9000',
    path:'/1.html'
};

var req=http.get(options,function (res) {
    console.log('statusCode:'+res.statusCode);
    console.log('headers'+res.headers);
    console.log('headers'+JSON.stringify(res.headers));
    res.on('data',function (chunk) {
        console.log(chunk.toString());
    })
});

req.on('error',function (err) {
    console.log(err);
});