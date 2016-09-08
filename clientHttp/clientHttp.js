var http=require('http');
var url=require('url');

var options={
    hostname:'10.10.13.45',
    port:'9000',
    path:'/1.html'
};

var server=http.createServer(function (req,res) {
    var pathname=url.parse(req.url).pathname;
    if(pathname=='/index'){
        console.log("someone into..\n\r");
        var req1=http.get(options,function (res) {
            console.log('statusCode:'+res.statusCode);
            console.log('headers'+res.headers);
            console.log('headers'+JSON.stringify(res.headers));
            res.on('data',function (chunk) {
                console.log(chunk.toString());

            })
        });

        req1.on('error',function (err) {
            console.log(err);
        });
        res.end();
    }
});

server.listen(7000);