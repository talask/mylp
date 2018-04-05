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
      center: {lat: 49.91, lng: 36.248},
      zoom: 8
    });
  }
//18,49.9161583,36.248290699999984,2,1' 