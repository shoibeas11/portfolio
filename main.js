$('.hide').hide();



$('.responsive-menu2').hide();

$('.show').click(function(){
    $('.responsive-menu2').slideDown();
    $('.show').hide();
    $('.hide').show();
});



$('.hide').click(function(){
    $('.responsive-menu2').slideUp();
    $('.show').show();
    $('.hide').hide();
});