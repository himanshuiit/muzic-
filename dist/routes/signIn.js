'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // this is a sign in page from where user will sign in using the password and email-id ;
// in req i will get email and password and i will check whether person is registered or not ...
// yes send code 200 else code 404;

router.use((0, _expressValidator2.default)());
router.post('/user/signIn', function (req, resp) {

	var email = req.body.email;
	var password = req.body.password;

	req.checkBody({
		//email is optional and should be of correct format
		'email': {
			optional: false,
			isEmail: true
		},

		//password is required and should be at least 6 characters long
		'password': {
			notEmpty: true

		}
	});
	var errors = req.validationErrors();
	if (errors) {
		//send error if request is invalid
		console.log('error are here');
		resp.setHeader('content-type', 'text/json');
		resp.send(errors);
	} else {
		var sqlstring = 'SELECT user_password FROM user WHERE user_email=?';
		_db2.default.query(sqlstring, [email], function (error, result) {
			if (error) {
				var response = {
					"code": 404,
					"message": "not found"
				};
				resp.send(response);
			} else {
				_bcrypt2.default.compare(password, result).then(function (res) {
					if (res == true) {
						var _response = {
							"code": 200,
							"message": "can sign in "
						};
						resp.send(_response);
					} else {
						var _response2 = {
							"code": 404,
							"message": "incorrect password "
						};
						resp.send(_response2);
					};
				}).catch(function (err) {
					console.log("error ");
					resp.send(err);
				});
			};
		});
	}
});
module.exports = router;
//# sourceMappingURL=signIn.js.map