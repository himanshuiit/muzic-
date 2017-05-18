'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _signUp = require('./routes/signUp.js');

var _signUp2 = _interopRequireDefault(_signUp);

var _signIn = require('./routes/signIn.js');

var _signIn2 = _interopRequireDefault(_signIn);

var _justCheck = require('./routes/justCheck.js');

var _justCheck2 = _interopRequireDefault(_justCheck);

var _updateFav = require('./routes/updateFav.js');

var _updateFav2 = _interopRequireDefault(_updateFav);

var _getFav = require('./routes/getFav.js');

var _getFav2 = _interopRequireDefault(_getFav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// var passport= require('passport');
/// "",

// var mysql =require('mysql');

app.use(_bodyParser2.default.json({ inflate: true }));
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _cors2.default)());
// here i will post the request for the track input
/////////////////////////////////////////////////////////////////////////////////////////////////

///// data insertion in user  for sign up page  information ... table name user and data is id, name, email , facebook , password ,active.

app.use('/', _signUp2.default);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.use('/', _signIn2.default);

app.use('/', _justCheck2.default);
//////////////////////////////////////////////////////////////////////now for login page ....

app.use('/', _updateFav2.default);
/////////////////////////

app.use('/', _getFav2.default);
///////////////
app.listen(8009);
exports.default = app;
//# sourceMappingURL=index.js.map