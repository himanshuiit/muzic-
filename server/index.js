import express from 'express';
// var mysql =require('mysql');
import cors from 'cors';

var app=express();
// var passport= require('passport');
/// "",

import bodyParser from 'body-parser';
app.use(bodyParser.json({inflate:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
// here i will post the request for the track input
/////////////////////////////////////////////////////////////////////////////////////////////////

///// data insertion in user  for sign up page  information ... table name user and data is id, name, email , facebook , password ,active.
import routerSignUp from './routes/signUp.js';
app.use('/',routerSignUp);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import routerSignIn from './routes/signIn.js';
app.use('/',routerSignIn);
import router from './routes/justCheck.js';
app.use('/',router);
//////////////////////////////////////////////////////////////////////now for login page ....
import routerUpdate from './routes/updateFav.js';
app.use('/',routerUpdate);
/////////////////////////
import routerGet from './routes/getFav.js';
app.use('/',routerGet);
///////////////
app.listen(8009);
export default app;
