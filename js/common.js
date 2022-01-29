$(function() {

  $(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
    e.stopPropagation();
  });

	$('#search').on('click', function() {
  $(this).addClass('active');
  });

	$('#search-closed').on('click', function() {
  $('#search').removeClass('active');
  });

  $('#search-drop').on('click', function() {
  $('#search-1-1').toggleClass('active');
  });

  $('.signup').on('click', function() {
  $('.block-sign-up').addClass('deleted');
  });

  Waves.attach('.btn-blue, .btn-red');
  Waves.attach('.btn, .link-search, .pill',  ['waves-light']);
  Waves.init();

  $('#map').vectorMap({
    map: 'us_lcc',
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: '#0e2241',
        stroke: '#fff',
        "stroke-width": 1,
      },
      hover: {
        fill: '#b92631',
        "fill-opacity": 1,
      },
    },
  });

});

