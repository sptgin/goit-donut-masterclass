//  $("a.scroll-to").click(function() {
//     var elementClick = $(this).attr("href")
//     var destination = $(elementClick).offset().top;
//     jQuery("html:not(:animated),body:not(:animated)").animate({
//         scrollTop: destination
//     }, 500);
//     return false;
//  });


 $(document).ready (function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
