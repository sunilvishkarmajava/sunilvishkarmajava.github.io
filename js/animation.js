/**
 * Created by sujit on 1/8/2017.
 */
$(window).scroll(function() {
    $('#animatedElement').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+1110) {
            $(this).addClass("slideUp");
        }
    });
});
