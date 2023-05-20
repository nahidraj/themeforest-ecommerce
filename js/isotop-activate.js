$(document).ready(function () {
  // init Isotope
  let $grid = $('.popular-products-container').isotope({
    // options
  });
  // filter items on button click
  $('.products-button').on('click', 'button', function () {
    let filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });

  $(".products-button button").on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  })
});