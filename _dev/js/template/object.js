Template = {

	reset: function(){
		$('img').error(function(){
		    $(this).attr('src', 'images/image-notfound.jpg');
			// $(this).css("display", "inline-block").fadeIn(500);
		});
	}

};

$(document).ready(function() {
/*
    var page = $('body');    
    $(window).mousewheel(function(event, delta, deltaX, deltaY){
        if (delta < 0) page.scrollTop(page.scrollTop() + 65);
        else if (delta > 0) page.scrollTop(page.scrollTop() - 65);
        return false;
    });
*/

	Template.reset();

});

// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});