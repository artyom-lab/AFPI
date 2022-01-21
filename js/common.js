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

  Waves.attach('.btn-blue, .btn-red');
  Waves.attach('.btn, .link-search',  ['waves-light']);
  Waves.init();

$('#map').usmap({
	stateStyles: {fill: '#0e2241'},
	stateHoverStyles: {fill: '#b92631'},
  // The click action
  click: function(event, data) {
    $('#clicked-state')
      .text('You clicked: '+data.name)
      .parent().effect('highlight', {color: '#C7F464'}, 2000);
  }
});

});

