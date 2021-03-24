import "bootstrap-icons/font/bootstrap-icons.css"
import '../styles/global.scss'
import '../styles/slick.scss'
import '../styles/slick-theme.scss'

$(document).ready(function(){
  $('.featured-product').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 640,
        settings: {
        arrows: false,
          centerMode: true,
        slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      ]
  });

  var $grid = $('.other-products-list').masonry({
    itemSelector: '.other-products-list li',
  });

  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
});