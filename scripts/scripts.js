// borrowed with love from http://codepen.io/440design/pen/iEztk

$(function(){
	var ink, d, x, y;
	$(".u-rippleLink").click(function(e){
    if($(this).find(".u-ink").length === 0){
        $(this).prepend("<span class='u-ink'></span>");
    }
         
    ink = $(this).find(".u-ink");
    ink.removeClass("u-animate--ripple");
     
    if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d, width: d});
    }
     
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
     
    ink.css({top: y+'px', left: x+'px'}).addClass("u-animate--ripple");
});
});