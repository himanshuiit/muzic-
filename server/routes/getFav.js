import express from 'express';
import connection from '../db';
const router = express.Router();

router.get('/user/getFav', (req, resp) => {
	let userId = req.query.user_id;
//console.log(userId);
	connection.query('SELECT track_name FROM track_user WHERE user_id =?',[userId], function(error, result) {
	// connection.query(`SELECT track_name FROM track_user WHERE user_id =${userId}`, function(error, result) {
		if (error) {
			console.log(error);
			let response = {
				"code": 400,
				"message": "error occured"
			};
			resp.send(response);
		} else {
			resp.send(result);
		}
	})
});
module.exports = router;
