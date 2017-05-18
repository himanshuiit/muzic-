'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/user/getFav', function (req, resp) {
	var userId = req.query.user_id;
	//console.log(userId);
	_db2.default.query('SELECT track_name FROM track_user WHERE user_id =?', [userId], function (error, result) {
		// connection.query(`SELECT track_name FROM track_user WHERE user_id =${userId}`, function(error, result) {
		if (error) {
			console.log(error);
			var response = {
				"code": 400,
				"message": "error occured"
			};
			resp.send(response);
		} else {
			resp.send(result);
		}
	});
});
module.exports = router;
//# sourceMappingURL=getFav.js.map