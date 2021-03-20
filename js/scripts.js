$(function () {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
    $("#loginButton").click(function() {
        $("#loginModal").modal();
    });

    function initMap() {

        var location = new google.maps.LatLng(50.0875726, 14.4189987);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

    }

    google.maps.event.addEventListener(window, 'load', initMap);

    
});

// $(function() {
//     $(".carousel").carousel( { interval: 2000 } );
//     $("#carouselButton").click(function(){
//         if ($("#carouselButton").children("i").hasClass("fa-pause")) {
//             $(".carousel").carousel("pause");
//             $("#carouselButton").children("i").removeClass("fa-pause");
//             $("#carouselButton").children("i").addClass("fa-play");
//         } else {
//             $(".carousel").carousel("cycle");
//             $("#carouselButton").children("i").removeClass("fa-play");
//             $("#carouselButton").children("i").addClass("fa-pause"); 
//         }
//     });
//     $("#loginButton").click(function() {
//         $("#loginModal").modal();
//     });