//进程退出
// process.on('exit',function (code) {
//     setTimeout(function () {
//        console.log('this will not run');
//     },0);
//     console.log(code);
// });

//进程遇到错误
process.on('uncaughtException', function(err){
    console.log('Caught exception: ${err}');
});

setTimeout(function(){
    console.log('This will still run.');
}, 500);

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();

console.log('This will not run.');
