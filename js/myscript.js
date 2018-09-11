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
 
});
