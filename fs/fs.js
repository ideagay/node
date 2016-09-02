
var fs=require('fs');
var exec=require('child_process').exec;

//读取文件
fs.readFile('a.txt','utf-8',function(err,data){
    if(err){
        throw err;
    }
    console.log(data);
});

//复制文件
//exec('cp a.txt b.txt');  //执行shell命令

//删除文件
// fs.unlink('b.txt',function (err) {
//    if(err){
//        throw err;
//    }
// });

//修改文件名
//fs.rename('a.txt','b.txt');

//编辑文件
fs.open('a.txt','a',function (err,fd) {
    if(err){
        throw err;
    }
    console.log(fd);
    var data='....this is add text';
    fs.write(fd,data,function (err,written,string) {
        if(err){
            throw err;
        }
        console.log('written:'+written);
        console.log('string:'+string);  //写入的内容
        fs.readFile('a.txt','utf-8',function(err,data){
            if(err){
                throw err;
            }
            console.log(data);
        });
    })
});