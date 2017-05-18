import express from 'express';
import mysql from 'mysql';
const router = express.Router();
import isAuth from '../middle/isAuth.js'
import connection from '../db.js';

router.post('/user/updateFav', function(req, resp) {
	//console.log(req);
	let userId = req.body.user_id;
	let key = req.body.key; // to add to fav list , or to remove from the fav list. key =1 remove from fav key =-1 add to fav;
	let trackName = req.body.track_name;

	let response = {
		"code": 404,
		"message": "some error occured  "
	};

	if (key == -1) // i am adding into the favorite user
	{ //'AND track_name ='+trackName,
		var queryString = 'SELECT track_name FROM track_user WHERE user_id = ? AND track_name = ?';

		connection.query(queryString, [userId, trackName], function(error, res) {
			//  console.log('error',error);x
			//console.log("hi this is inside the query");
			//  console.log(error);
			if (error) {
				connection.query('Insert into track_user(user_id, track_name) values(?,?)', [userId, trackName], function(error, ress) {
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

		connection.query('DELETE FROM track_user WHERE user_id=userId AND track_name =?',[trackName], function(error, result) {
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
