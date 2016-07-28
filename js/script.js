/*Nina Kong*/
$(document).ready(function(){
	var windowHeight = $( window ).height();
	$(".container").height(windowHeight);

    $("h1:contains('Title')").css({"padding": "2em", "color": "#b37aa5"}); 

    $("#Content:parent").css("font-size", "2.5em");

    $("div:has(a[id=icon3])").css("padding", "2em 1em");

    $("div a:first-child").css("color", "#b26c34"); 

    $("div a:last-of-type").css("color", "#eba96d"); 

    $("div a:nth-child(2)").css("color", "#b37aa5"); 

 	$("div a:nth-child(3n)").css("color", "#e4b7bf"); 

});
