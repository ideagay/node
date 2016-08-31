/**
 * Created by hyb on 16/8/31.
 */
var net=require('net');
var chartServer=net.createServer();
var clientList=[];
chartServer.on("connection",function(client){
    clientList.push(client);
    client.write("welcome to hyb's server...");
    client.on("data",function(data){
        for(var i = 0;i < clientList.length;i++){
            if(client!=clientList[i]){
                clientList[i].write(data.toString())
            }
        }
        console.log(data.toString());
    })
});

chartServer.listen(9000);