$(document).ready(function(){

	$(".clickerButton").click(function(){
		$(".home-main").fadeOut(800,function(){
			$(".container-fluid").show();
			console.log("ok");
		});
	});
})