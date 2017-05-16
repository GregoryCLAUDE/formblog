console.log("yipikai, connecté au js")
$(document).ready(function(){
	
	$.ajax({
		url:"/articles",
		data: {
		task: "get",
		},
		success : function(data){
//		console.log(data)
		}
	})
	.done(function(data){
		var articles = (data);
		console.log(articles)
		createArray(articles);
		console.log(articles.length);		
	})

function createArray(array){
	for (var i = 0; i < array.length; i++) {
	 	$("tbody").append("<tr id="+array[i].id+"><tr>");
	 	console.log(array[i].titre)
	 	$("#"+array[i].id+"").append("<th>"+[i]+"</th>");
	 	$("#"+array[i].id+"").append("<th>"+array[i].titre+"</th>");
	 	$("#"+array[i].id+"").append("<th><button class='btn btn-danger'><span class='glyphicon glyphicon-remove-circle' aria-hidden='true'></span></button></th>");
	 	$("#"+array[i].id+"").append("<th><button class='btn btn-warning'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></span></button></th>");
	}
}
})
