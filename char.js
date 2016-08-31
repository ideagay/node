/**
 * Created by hyb on 16/8/31.
 */
var net=require('net');
var ChartServer=net.createServer();
var clientList=[];
ChartServer.on("connection",function(client){
    client.name=client.remoteAddress+':'+client.remotePort;
    console.log(client.name+" joined!");//通知服务器谁来了
    clientList.push(client);
    client.write("welcome to hyb's server...");
    client.on("data",function(data){
        for(var i = 0;i < clientList.length;i++){
            if(client!=clientList[i]){
                clientList[i].write(client.name+":"+data.toString());
            }
        }
        console.log(client.name+":"+data.toString());
    });
    client.on("end",function(){
        clientList.splice(clientList.indexOf(client),1);
        console.log(client.name+" left!"); //通知服务器谁离开了
    });
    client.on("error",function(e){
       console.log(e);
    });

});

ChartServer.listen(9000);