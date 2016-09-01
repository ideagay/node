/**
 * Created by hyb on 16/8/31.
 */
var http=require('http'),
    url=require('url'),
    fs=require('fs'),
    querystring=require('querystring'),
    formidable=require('/usr/local/lib/node_modules/formidable'); //引用全局模块

var MIME_PLAIN={"Content-Type":"text/plain"};
var MIME_HTML={"Content-Type":"text/html"};

var server=http.createServer(function(req,res){
   var pathname=url.parse(req.url).pathname;
    if(pathname=='/index'){
        console.log("someone into..\n\r");
        var htmlContext=fs.readFile('post.html','utf-8',function(err,data){
            if(err){
                console.log("Server.error:102\n\r");
            }else{
                res.writeHead(200,MIME_HTML);
                res.write(data);
                res.end();
            }
        });

    }else if(pathname=='/post'){
        var form=new formidable.IncomingForm();
        form.uploadDir='./temp';
        form.parse(req,function(err,fields,files){
            if(err){
                console.log('upload error');
            }else{
                res.writeHead(200,MIME_PLAIN);
                console.log(JSON.stringify(fields)+'\n\r');
                console.log(JSON.stringify(files)+'\n\r');
                var path=files.img.path;
                var type=files.img.type.split('/')[1];
                fs.rename(path,'./temp/'+new Date()+'.'+type,function(e){
                    res.write('upload success!');
                    res.end();
                });

            }

        })
    }else{
        res.writeHead(404,MIME_PLAIN);
        res.write("404 page not found");
        res.end();
    }
});

server.listen(9000);