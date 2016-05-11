$(document).ready(function(){

	$(".clickerButton").click(function(){
		$(".loader_page,.loader_social,#description").fadeOut(800,function(){
			$(".container-fluid").show();
			console.log("ok");
		});
	});
})