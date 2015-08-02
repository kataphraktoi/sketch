$(document).ready(function(){
	
	var $box = "<div class ='square'> </div>";
	var count = 0;
	while (count < 256) {
		$('.wrapper').append($box);
		count++;
	};

	$('.square').mouseenter(function(){
		$(this).css("background-color", "black");
	});
	$('#clear').click(function(event){
		event.preventDefault();
		$('.square').css("background-color", "white");
	});
	$('#new').click(function(event){
		var count = 0;
		event.preventDefault();
		var userGrid = prompt("How many squares per row '1-64' :");
		$('.wrapper').empty();

		while (count < (userGrid * userGrid)) {
			$('.wrapper').append($box);
			count++;
		};

		$('.square').hover(function(){
			$(this).css("background-color", "black");
		});

		var newDimension = 600 / userGrid;
		$('.square').css('width', newDimension);
		$('.square').css('height', newDimension);
	});
});