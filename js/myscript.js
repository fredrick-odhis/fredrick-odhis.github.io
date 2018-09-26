$(function() {
    $('.chart').easyPieChart({
        easing: 'easeOutElastic',
        delay: 3000,
        barColor: '#00ff6c',
        trackColor: 'white',
        scaleColor: false,
        lineWidth: 8,
        lineCap: 'butt',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
 });
 
 var scrollLink = $('.scroll');

 // Smooth scrolling
scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({ 
        scrollTop: $(this.hash).offset().top
    }, 1000)

});

// Active link switching
$(window).scroll(function(){
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function() {
        var sectionOffset = $(this.hash).offset().top-50;

        if (sectionOffset <= scrollbarLocation) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
        }
    });
});

});
