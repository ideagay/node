
var io=require('/usr/local/lib/node_modules/socket.io');
var socket=io.listen('9000');

socket.on('connection',function (client) {
    console.log('有一个连接进来了');
    client.emit('news','{"name":"han"}');
    client.send('welcome');

    client.on('my',function (data) {
        console.log(data)
    });
});
