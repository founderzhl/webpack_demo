//引入css
require("../../css/lib/reset.css");
require("../../css/common/global.css");
require("../../css/common/grid.css");
require("../../css/page/list.less");


var html = '';
for(var i=0;i<5;i++){
	html += '<li>学生：'+(i+1)+'号</li>';
	html += '<li>年级：'+(i+1)+'年级</li>';
}

$('#list').html(html);