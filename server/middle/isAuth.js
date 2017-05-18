import jwt from 'jsonwebtoken';
import  'dotenv/config';
let isAuth = (req, res, next) => {
	console.log("hi thi");
	// check header or url parameters or post parameters for token
	var token = req.body.token || req.query.token || req.headers['x-access-token'];

	// decode token
	if (token) {

		// verifies secret and checks exp
		jwt.verify(token, process.env.SECRET, (err, decoded) => {
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
export default isAuth;
