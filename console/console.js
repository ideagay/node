/**
 * Created by hyb on 16/9/8.
 */
var fs=require('fs');
var Console=require('console').Console;

var output=fs.createWriteStream('./stdout.log');
var errOutput=fs.createWriteStream('./stderr.log');

var logger=new Console(output,errOutput);

var name='hanyongin';
logger.log('my name is '+name);

logger.warn('warning something wrong!');

