$(document).ready(function(){

	  // Init empty gallery array
	  var container = [];

	  // Loop over gallery items and push it to the array
	  $('.ss-component-arwtworks-paintings').find('figure').each(function() {
	    var $link = $(this).find('.ss-component-gallery-item'),
	      item = {
	        src: $link.attr('href'),	        
	        w: $link.data('width'),
	        h: $link.data('height'),
	        title: $link.data('caption')
	      };
	    container.push(item);
	  });

	  // Define click event on gallery item
	  $(this).click(function(event) {

	    event.preventDefault();

	    console.log($(this));

	    var $pswp = $('.pswp')[0],
	      options = {
	        index: $(this).parent('figure').index(),
	        bgOpacity: 0.85,
	        showHideOpacity: true
	      };

	    // Initialize PhotoSwipe
	    var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
	    gallery.init();
	  });
})