/**
 * Created by hyb on 16/8/31.
 */
/**code*/
var net = require('net');   //加载net模块
var chartServer=net.createServer();  //创建一个服务
var clientList=[]; //建立一个客户端数组
chartServer.on('connection',function(client){  //监听服务器端连接
    client.name=client.remoteAddress+':'+client.remotePort;
    client.write("Welcome to hyb's server");  //像连接的客户端输出信息
    console.log(client.name+" joined!");//通知服务器谁来了
    clientList.push(client);  //把连接的客户端推入数组
    client.on('data',function(data){  //监听客户端输入
        for(var i=0;i<clientList.length;i++){
            if(client != clientList[i]){  //当不是自身客户端时，像别的已连接的客户端输出信息
                clientList[i].write(client.name+":"+data.toString());
            }
        }
        console.log(client.name+":"+data.toString());
    });
    client.on("end",function(){
        clientList.splice(clientList.indexOf(client),1); //从数组里删除离开的客户端
        console.log(client.name+" left!"); //通知服务器谁离开了
    });
    client.on("error",function(e){
        console.log(e);
    });
});


chartServer.listen(9000);  //监听9000端口