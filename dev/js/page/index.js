//引入css
require("../../css/lib/reset.css");
require("../../css/common/global.css");
require("../../css/common/grid.css");
require("../../css/page/index.less");

var html ='';
    html +='	小小张学习webpack简单的开发：小小张开发好玩<br />';
    html +='    版本：0.0.1<br />';
    html +='    地址：北京市海淀区*&……%￥';

$('.g-bd').append('<p class="text">'+html+'</p>');

//增加事件
$('.btn').click(function() {
	require.ensure(['../components/dialog/index.js'], function(require) {
		var Dialog = require('../components/dialog/index.js');
		new Dialog();
	});
});