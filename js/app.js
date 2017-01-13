$(document).ready(function() {
    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });
    $("#form1").validate({
        rules: {
            name: {
                required: true,
                minlength: 5,
                maxlength: 30
            },
            email: {
                required: true,
                email: true
            }
        }
    });
    $("#right").on("click", function() {
        $(".text1").addClass("hidden");
        $(".text2").removeClass("hidden");

    })
    $("#left").on("click", function() {
        $(".text2").addClass("hidden");
        $(".text1").removeClass("hidden");

    })


});