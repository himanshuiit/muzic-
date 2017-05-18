'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _index = require('../dist/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape2.default)('signUp route success', function (t) {
	var resp = {
		'name': 'himanshu',
		'email': 'himanshusinghal9298@gmail.com',
		'facebook': 'singhal.iitr',
		'password': 'ihi'
	};
	(0, _supertest2.default)(_index2.default).post('/user/signUp').send(resp).expect(200).expect('Content-Type', /json/).end(function (error, res) {
		var thinginbody = res.body;
		t.error(error, 'no error');
		t.equals(res.body.code, 201, 'code is correct');
		t.equals(res.body.message, 'added user', 'message is correct');
	});
});

(0, _tape2.default)('signUp route failure', function (t) {
	var resp = {
		'name': '',
		'email': 'himanshusinghal9298@gmail.com',
		'facebook': 'singhal.iitr',
		'password': 'ihi'
	};
	(0, _supertest2.default)(_index2.default).post('/user/signUp').send(resp).expect(404).expect('Content-Type', /json/).end(function (error, res) {
		var thinginbody = res.body;
		t.error(error, 'no error');
		t.equals(res.body.code, 404, 'code is correct');
		t.equals(res.body.message, 'wrong request', 'message is correct');
	});
});

(0, _tape2.default)('signUp route failure', function (t) {
	var resp = {
		'name': 'himanshu',
		'email': '',
		'facebook': 'singhal.iitr',
		'password': 'ihi'
	};
	(0, _supertest2.default)(_index2.default).post('/user/signUp').send(resp).expect(404).expect('Content-Type', /json/).end(function (error, res) {
		var thinginbody = res.body;
		t.error(error, 'no error');
		t.equals(res.body.code, 404, 'code is correct');
		t.equals(res.body.message, 'wrong request', 'message is correct');
	});
});

(0, _tape2.default)('signUp route failure', function (t) {
	var resp = {
		'name': 'himanshu',
		'email': 'himanshusinghal9298@gmail.com',
		'facebook': '',
		'password': 'ihi'
	};
	(0, _supertest2.default)(_index2.default).post('/user/signUp').send(resp).expect(404).expect('Content-Type', /json/).end(function (error, res) {
		var thinginbody = res.body;
		t.error(error, 'no error');
		t.equals(res.body.code, 404, 'code is correct');
		t.equals(res.body.message, 'wrong request', 'message is correct');
	});
});
//# sourceMappingURL=signUp.test.js.map