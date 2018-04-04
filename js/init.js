$( function() {
    // Init tabs
    $( "#tabs" ).tabs();
    // Init tabs
    $( "#tabs-portfolio" ).tabs();
    //init slick carousel
$('.reviews-carousel').slick({
    dots: true,
    prewArrow: '<div class="slick-perv slick-arrow"><dif class="carousel-button"><i class="fa-fa-chewron-left"></i></div></div>',
    nextArrow: '<div class="slick-next slick-arrow"><dif class="carousel-button"><i class="fa-fa-chewron-right"></i></div></div>',
});
  });
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 43.397, lng: 15.644},
      zoom: 8
    });
  }
