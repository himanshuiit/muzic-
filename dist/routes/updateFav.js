'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _isAuth = require('../middle/isAuth.js');

var _isAuth2 = _interopRequireDefault(_isAuth);

var _db = require('../db.js');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.post('/user/updateFav', function (req, resp) {
	//console.log(req);
	var userId = req.body.user_id;
	var key = req.body.key; // to add to fav list , or to remove from the fav list. key =1 remove from fav key =-1 add to fav;
	var trackName = req.body.track_name;

	var response = {
		"code": 404,
		"message": "some error occured  "
	};

	if (key == -1) // i am adding into the favorite user
		{
			//'AND track_name ='+trackName,
			var queryString = 'SELECT track_name FROM track_user WHERE user_id = ? AND track_name = ?';

			_db2.default.query(queryString, [userId, trackName], function (error, res) {
				//  console.log('error',error);x
				//console.log("hi this is inside the query");
				//  console.log(error);
				if (error) {
					_db2.default.query('Insert into track_user(user_id, track_name) values(?,?)', [userId, trackName], function (error, ress) {
						if (!error) {
							//  console.log("we are in in");
							response.code = 200;
							response.message = "added successfully";
							resp.send(response);
						};
					});
				} else {
					//   console.log("in else");
					response.code = 200;
					response.message = "already added";
					resp.send(response);
				}
			});
		}
		////////////////////////////////////////////////////// we now remove the track from the user favorite /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	else if (key == 1) {

			_db2.default.query('DELETE FROM track_user WHERE user_id=userId AND track_name =?', [trackName], function (error, result) {
				if (error) {
					//  console.log("hello you are in error zone");
					//  console.log(response.code);
					response.code = 402;
					response.message = "some error occure in delete.";
					resp.send(response);
				} else {
					response.code = 200;
					response.message = "deleted successfully";
					resp.send(response);
				}
				console.log('sending the message');
			});
		}
	//  console.log('sending response');
});
module.exports = router;
//# sourceMappingURL=updateFav.js.map