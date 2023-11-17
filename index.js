$(document).ready(function() {
  
    $(".toggle-text").hide();

   
    $(".toggle-button").click(function() {
        var textToToggle = $(this).siblings(".card-text").find(".toggle-text");
        textToToggle.slideToggle();
    });

    $(".card").each(function(index) {
        var card = $(this);
        setTimeout(function() {
            card.css("transform", "translateY(0)");
        }, 100 * index);
    });
});

$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul')
    $('.pKanan').addClass('pMuncul')
})



