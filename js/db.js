var userDb = window.openDatabase("user.db","1.0","null",1024*1024);
var dataList;
if (!userDb) {
	alert("数据初始化失败！");
} else {
	//alert("数据初始化成功！");
}
/* creat db */
userDb.transaction(function(tr){
	tr.executeSql("create table user(id integer primary key autoincrement, name text, imgUrl text,department text)")
})
function insertDate(){
	userDb.transaction(function(tr){
		tr.executeSql("INSERT INTO user (name,department,imgUrl) VALUES (?,?,?)",[userName.value,department.value,imgUrl.value]);
	})
}
function del(){
	userDb.transaction(function(tr){
		tr.executeSql("DELETE FROM user WHERE id="+ userId.value +"");
	})
}

function reset(){
	userDb.transaction(function(tr){
		tr.executeSql("drop table user")
	})
}

getData()
function getData(){
	userDb.transaction(function(tr){
		tr.executeSql("select * from user",[],function(tr,result){
			//console.log( result.rows);
		})
	})
}





