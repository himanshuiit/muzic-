'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

require('dotenv/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var SECRET = process.env.SECRET;

// console.log("hi this is me before the post function");
router.post('/user/signUp', function (req, res) {
	// console.log("hi this is me inside the post function");
	var name = req.body.name;
	var email = req.body.email;
	var facebook = req.body.facebook;
	var password = req.body.password;

	var saltRounds = 10;
	_bcrypt2.default.hash(password, saltRounds).then(function (hash) {
		_db2.default.query('INSERT INTO user (user_name,user_email,user_password,user_facebook) VALUES (?,?,?,?)', [name, email, hash, facebook], function (error, result) {
			if (error) {
				var response = {
					'code': 404,
					'message': 'wrong request'
				};
				res.send(response);
			} else {
				var user = {
					id: result.insertId,
					name: name,
					email: email,
					facebook: facebook
				};

				var token = _jsonwebtoken2.default.sign(user, SECRET, {});
				var _response = {
					'token': token,
					'code': 201,
					'message': 'added user'
				};

				res.send(_response);
			}
		});
	});
});
module.exports = router;
//# sourceMappingURL=signUp.js.map