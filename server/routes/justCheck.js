import express from 'express';
import connection from '../db';
const router = express.Router();
router.get('/',(req,res)=>{
	res.send("deployment occured");
});
module.exports=router;
