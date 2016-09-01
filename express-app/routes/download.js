/**
 * Created by hyb on 16/9/1.
 */
var express=require('express');
var path=require('path');
var router=express.Router();

router.get('/',function (req,res) {
   res.download('../public/1.txt');
});

module.exports=router;