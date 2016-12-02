var obj=null;
var As=document.getElementById('nav').getElementsByTagName('a');
obj = As[0];
for(i=1;i<As.length;i++)
{if(window.location.href.indexOf(As[i].href)>=0)
obj=As[i];}
obj.id='nava'



var $link = $('.link');
var $submit = $('.submit');
var $userInfo = $('#userInfo');
$link.find('a').on('click',function(){
	$submit.show();
	$link.hide();
});
$submit.find('a').on('click',function(){
	$link.show();
	$submit.hide();
});
$link.find('button').on('click',function(){
	$.ajax({
		type:'post',
		url:'/api/user/register',
		data:{
			username:$link.find('[name="username"]').val(),
			password:$link.find('[name="password"]').val(),
			repassword:$link.find('[name="repassword"]').val()
		},
		dataType:'json',
		success:function(result){
			$link.find('p').html(result.message);
			if(!result.code){
				setTimeout(function(){
					$submit.show();
					$link.hide();
				},1000);
			}
		}
	});
})
$submit.find('button').on('click',function(){
	$.ajax({
		type:'post',
		url:'/api/user/login',
		data:{
			username:$submit.find('[name="username"]').val(),
			password:$submit.find('[name="password"]').val()
		},
		dataType:"json",
		success:function(result){
			$submit.find('p').html(result.message);
			if(!result.code){
				window.location.reload();
			}
		}
	})
})
$('#logout').on('click',function(){
	$.ajax({
		url:'/api/user/logout',
		success:function(result){
			if(!result.code){
				window.location.reload();
			}
		}
	})
})