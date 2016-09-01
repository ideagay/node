/**
 * Created by hyb on 16/9/1.
 */
var express = require('express');
var router = express.Router();

/* GET list page. */
router.get('/',function (req,res,next) {
   res.send('This is a list page!')
});

module.exports=router;
