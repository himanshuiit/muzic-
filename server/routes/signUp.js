import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import connection from '../db';
const router = express.Router();
const SECRET = process.env.SECRET;
import 'dotenv/config';
// console.log("hi this is me before the post function");
router.post('/user/signUp', function(req, res) {
	// console.log("hi this is me inside the post function");
	let name = req.body.name;
	let email = req.body.email;
	let facebook = req.body.facebook;
	let password = req.body.password;

	const saltRounds = 10;
	bcrypt.hash(password, saltRounds).then(function(hash) {
		connection.query('INSERT INTO user (user_name,user_email,user_password,user_facebook) VALUES (?,?,?,?)', [name, email, hash, facebook], function(error, result) {
			if (error) {
				let response = {
					'code': 404,
					'message': 'wrong request'
				};
				res.send(response);
			} else {
				let user = {
					id: result.insertId,
					name: name,
					email: email,
					facebook: facebook,
				};

				let token = jwt.sign(user, SECRET, {});
				let response = {
					'token': token,
					'code': 201,
					'message': 'added user'
				};

				res.send(response);
			}
		});
	});

});
module.exports = router;
