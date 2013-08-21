//Carousel functions not currenty in use.


/* DISABLE CAROUSEL AUTOCYCLING */
$('#myCarousel').carousel({
    interval: false
});


// taken from http://jsfiddle.net/juddlyon/Q2TYv/10/
/* SLIDE ON CLICK */ 

$('.nav > li > a').click(function() {

    // grab href, remove pound sign, convert to number
    var item = Number($(this).attr('href').substring(1));

    // slide to number -1 (account for zero indexing)
    $('#myCarousel').carousel(item - 1);

    // remove current active class
    $('.nav .active').removeClass('active');

    // add active class to just clicked on item
    $(this).parent().addClass('active');

    // don't follow the link
    return false;
});


/* AUTOPLAY NAV HIGHLIGHT */

// bind 'slid' function
$('#myCarousel').bind('slid', function() {

    // remove active class
    $('.nav .active').removeClass('active');

    // get index of currently active item
    var idx = $('#myCarousel .item.active').index();

    // select currently active item and add active class
    $('.nav li:eq(' + idx + ')').addClass('active');

});             