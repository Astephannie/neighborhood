$(".neighborhood").click(function(e){
 	e.preventDefault();
 	$(".initial-text").attr("style", "display:none"); 
 	$(".change-text").attr("style", "display:block");  
    $(".change-text").fadeIn();
});
