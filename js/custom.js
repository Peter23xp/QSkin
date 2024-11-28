// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(-1.6884126889279931, 29.252048101658676),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

$(document).ready(function() {
  $('#customCarousel1').on('slide.bs.carousel', function (e) {
    // Retire la classe active de toutes les images de fond
    $('.bg_img').removeClass('active');
    // Ajoute la classe active à l'image correspondante
    $('.bg_img').eq($(e.relatedTarget).index()).addClass('active');
  });

  $('#customCarousel2').carousel({
    interval: 15000,  // 15 secondes par slide
    wrap: true        // Permet au carrousel de boucler
  });
});