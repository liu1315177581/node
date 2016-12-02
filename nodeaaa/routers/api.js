var express = require('express');
var router = express.Router();
// 数据库模块
var User = require('../models/Users');

var responseDate;
router.use(function(req,res,next){
	responseDate = {
		code:0,
		message:""
	}
	next();
})
// 用户注册
// 注册逻辑
router.post('/user/register',function(req,res,next){
	// req.body会得到数据
	var username = req.body.username;
	var password = req.body.password;
	var repassword = req.body.repassword;
	if(username == ""){
		responseDate.code = 1;
		responseDate.message = "用户不能为空";
		res.json(responseDate);
		return;
	}
	if(password == ""){
		responseDate.code = 2;
		responseDate.message = "密码不能为空";
		res.json(responseDate);
		return;
	}
	if(password != repassword){
		responseDate.code = 3;
		responseDate.message = "两次输入的密码不一致";
		res.json(responseDate);
		return;
	}
	User.findOne({
		username:username
	}).then(function(userInfo){
		if(userInfo){
			// 表示数据库中有该记录
			responseDate.code = 4;
			responseDate.message = "用户名已经被注册";
			res.json(responseDate);
			return;
		}
		// 保存用户注册的信息
		var user = new User({
			username : username,
			password : password
		});
		return user.save();
	}).then(function(newUserInfo){
		responseDate.message = '注册成功';
		res.json(responseDate);
	})
})

router.post('/user/login',function(req,res){
	var username = req.body.username;
	var password = req.body.password;
	if(username == '' || password == ''){
		responseDate.code = 1;
		responseDate.message = '用户名和密码不能为空';
		res.json(responseDate);
		return;
	}
	// 查询数据库中相同用户名和密码的记录是否存在吗，如果存在则登录成功
	User.findOne({
		username:username,
		password:password
	}).then(function(userInfo){
		if(!userInfo){
			responseDate.code = 2;
			responseDate.message = '用户名或密码错误';
			res.json(responseDate);
			return;
		}
		responseDate.message = "登录成功";
		responseDate.userInfo = {
			_id:userInfo._id,
			username:userInfo.username
		}
		req.cookies.set('userInfo',JSON.stringify({
			_id:userInfo._id,
			username:userInfo.username
		}));
		res.json(responseDate);
		return;
	})	
	// 用户名和密码正确
})
router.get('/user/logout',function(req,res){
	req.cookies.set('userInfo',null);
	res.json(responseDate);
	
});
module.exports = router;