

$( document ).ready(function() {

    $( ".col-md-6" ).mouseover(function(evt) {
	  $(evt.currentTarget).css('background-color','#eee');
	});

	$( ".col-md-6" ).mouseout(function(evt) {
	  $(evt.currentTarget).css('background-color','white');
	});


	$( ".col-md-6" ).click(function(evt) {
	  $($(this).data("modal")).modal('show');
	});



});


