// this is a sign in page from where user will sign in using the password and email-id ;
// in req i will get email and password and i will check whether person is registered or not ...
// yes send code 200 else code 404;
import express from 'express';
import connection from '../db';
import bcrypt from 'bcrypt';
const router = express.Router();
import expressvalidator from 'express-validator';
router.use(expressvalidator());
router.post('/user/signIn', (req, resp) => {

	let email = req.body.email;
	let password = req.body.password;


	req.checkBody({
		//email is optional and should be of correct format
		'email': {
			optional: false,
			isEmail: true
		},

		//password is required and should be at least 6 characters long
		'password': {
			notEmpty: true,

		}
	});
	var errors = req.validationErrors();
	if (errors) {
		//send error if request is invalid
		console.log('error are here');
		resp.setHeader('content-type', 'text/json');
		resp.send((errors));
	} else {
		let sqlstring = 'SELECT user_password FROM user WHERE user_email=?'
		connection.query(sqlstring, [email], function(error, result) {
			if (error) {
				let response = {
					"code": 404,
					"message": "not found"
				}
				resp.send(response);
			} else {
				bcrypt.compare(password, result).then(function(res) {
						if (res == true) {
							let response = {
								"code": 200,
								"message": "can sign in "
							}
							resp.send(response);
						} else {
							let response = {
								"code": 404,
								"message": "incorrect password "
							}
							resp.send(response);
						};
					})
					.catch(function(err) {
						console.log("error ");
						resp.send(err);
					});


			};
		});
	}
});
module.exports = router;
