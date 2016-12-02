var mongoose = require('mongoose');
module.exports = new mongoose.Schema({
	// 关联字段-分类的id
	category:{
		type:mongoose.Schema.Types.ObjectId,
		// 引用
		ref:'Category'
	},
	// 内容标题
	title:String,
	user:{
		type:mongoose.Schema.Types.ObjectId,
		// 引用
		ref:'Users'
	},
	addTime:{
		type:Date,
		default:new Date()
	},
	views:{
		type:Number,
		default:0
	},
	description:{
		type:String,
		default:''
	},
	content:{
		type:String,
		default:''
	}
})