import test from 'tape';
import  request from 'supertest';
import app from '../dist/index.js';




test('signUp route success', (t)=>{
	let resp={
		'name':'himanshu',
		'email':'himanshusinghal9298@gmail.com',
		'facebook':'singhal.iitr',
		'password':'ihi'
	};
	request(app)
	.post('/user/signUp')
	.send(resp)
	.expect(200)
	.expect('Content-Type', /json/)
	.end((error,res)=>{
		let thinginbody=res.body;
		t.error(error,'no error');
		t.equals(res.body.code,201,'code is correct');
		t.equals(res.body.message,'added user','message is correct');
	});
});

test('signUp route failure',(t)=>{
	let resp={
		'name':'',
		'email':'himanshusinghal9298@gmail.com',
		'facebook':'singhal.iitr',
		'password':'ihi'
	};
	request(app)
	.post('/user/signUp')
	.send(resp)
	.expect(404)
	.expect('Content-Type', /json/)
	.end((error,res)=>{
		let thinginbody=res.body;
		t.error(error,'no error');
		t.equals(res.body.code,404,'code is correct');
		t.equals(res.body.message,'wrong request','message is correct');
	});

});


test('signUp route failure',(t)=>{
	let resp={
		'name':'himanshu',
		'email':'',
		'facebook':'singhal.iitr',
		'password':'ihi'
	};
	request(app)
	.post('/user/signUp')
	.send(resp)
	.expect(404)
	.expect('Content-Type', /json/)
	.end((error,res)=>{
		let thinginbody=res.body;
		t.error(error,'no error');
		t.equals(res.body.code,404,'code is correct');
		t.equals(res.body.message,'wrong request','message is correct');
	});

});



test('signUp route failure',(t)=>{
	let resp={
		'name':'himanshu',
		'email':'himanshusinghal9298@gmail.com',
		'facebook':'',
		'password':'ihi'
	};
	request(app)
	.post('/user/signUp')
	.send(resp)
	.expect(404)
	.expect('Content-Type', /json/)
	.end((error,res)=>{
		let thinginbody=res.body;
		t.error(error,'no error');
		t.equals(res.body.code,404,'code is correct');
		t.equals(res.body.message,'wrong request','message is correct');
	});

});
