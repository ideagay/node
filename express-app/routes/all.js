/**
 * Created by hyb on 16/9/1.
 */
var express = require('express');
var router = express.Router();

//适应所以类型的请求
router.all('/',function (req,res,next) {
   console.log('Accessing the secret section ... ');
});

module.exports=router;