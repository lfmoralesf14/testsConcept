const {Router} =require ('express');
const { request, response } = require('../app');
const router = Router();
router.get('/',(req,res) => res.json({message: 'hello world'}));
module.exports=router;