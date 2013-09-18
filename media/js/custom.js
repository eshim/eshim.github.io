jQuery(document).ready(function(){
	// A lot of jquery plugins for this effect...
	$.localScroll({
		duration: 500,
		offset: {left:0, top:-50}
	});
	
	//call scrollspy
	$('#navbar').scrollspy();
});