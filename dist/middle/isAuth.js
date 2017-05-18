'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

require('dotenv/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isAuth = function isAuth(req, res, next) {
	console.log("hi thi");
	// check header or url parameters or post parameters for token
	var token = req.body.token || req.query.token || req.headers['x-access-token'];

	// decode token
	if (token) {

		// verifies secret and checks exp
		_jsonwebtoken2.default.verify(token, process.env.SECRET, function (err, decoded) {
			if (err) {
				return res.json({
					code: 400,
					success: false,
					message: err.name
				});
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;
				next();
			}
		});
	} else {

		// if there is no token
		// return an error
		return res.status(403).send({
			code: 403,
			success: false,
			message: 'No token provided.'
		});
	}
};
exports.default = isAuth;
//# sourceMappingURL=isAuth.js.map