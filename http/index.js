/**
 * Created by hyb on 16/8/31.
 */
//web服务
var http=require('http'); //http服务模块
var url=require('url'); //路由解析模块
var fs=require('fs'); //文件系统模块
var FILE='/Users/hyb/WebstormProjects/node/http';//定义目录常量
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'}); //定义mime
    urlText=FILE+url.parse(request.url).pathname; //文件路径
    console.log(urlText);
    if(url.parse(request.url).pathname!='/favicon.ico'){
        var data=fs.readFileSync(urlText,'utf-8'); //读取物理文件
        response.write(data); //返回到客户端
    }
    response.end()
}).listen(9000,'10.10.13.45');

console.log('http server is running...');