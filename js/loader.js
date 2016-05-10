$(document).ready(function(){

	$(".clickerButton").click(function(){
		$(".loader_page").fadeOut(800,function(){
			$(".container").show();
			console.log("ok");
		});
	});
})