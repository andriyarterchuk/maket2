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
        if ($(".text1").hasClass("hidden") == false) {
            $(".text1").addClass("hidden");
            $(".text2").removeClass("hidden");
        } else if ($(".text2").hasClass("hidden") == false) {
            $(".text2").addClass("hidden");
            $(".text3").removeClass("hidden");
        } else if ($(".text3").hasClass("hidden") == false) {
            $(".text3").addClass("hidden");
            $(".text4").removeClass("hidden");
        }
    })
    $("#left").on("click", function() {
        if ($(".text2").hasClass("hidden") == false) {
            $(".text2").addClass("hidden");
            $(".text1").removeClass("hidden");
        } else if ($(".text3").hasClass("hidden") == false) {
            $(".text3").addClass("hidden");
            $(".text2").removeClass("hidden");
        } else if ($(".text4").hasClass("hidden") == false) {
            $(".text4").addClass("hidden");
            $(".text3").removeClass("hidden");
        }

    })


});