$(document).ready(function() {
//global variables

	var counter = 0;
	var wins = 0;
	var losses = 0;

	//determining win and loss counter
	$('#win').text(wins);
	$('#loss').text(losses);
	
	newEggs();
	newGame();
	function newEggs () {
		var numbers = []
			while(numbers.length < 4){
				//Math.ceil will round the number in to an integer
				//determine the random number 
				//this number is the wining number if the user guesses correctly
			  var randomNumber = Math.ceil(Math.random()*15)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomNumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomNumber;
			}

		//console.log(newEggs);		
		for (i = 0; i < numbers.length; i++) {
			var imageEgg = $('<img>');
			imageEgg.attr('data-num', numbers[i]);
			imageEgg.attr('alt', 'dragonEggs');
			imageEgg.attr('src', 'assets/images/DragonEgg'+ (i+1) +'Start.png');
			imageEgg.addClass('eggImage');
			imageEgg.addClass('egg' + (i+1)); // egg1, egg2
			$('#dragonEggs').append(imageEgg);
		}
	}


	function onHover () {
		$(".eggImage").on("mouseover", function(){
			console.log("You're hovering");
			if ($(this).hasClass("egg1")) {
				$(this).attr('src', 'assets/images/DragonEgg1.gif');	
			}
			if ($(this).hasClass("egg2")) {
				$(this).attr('src', 'assets/images/DragonEgg2.gif');	
			}
			if ($(this).hasClass("egg3")) {
				$(this).attr('src', 'assets/images/DragonEgg3.gif');	
			}
			if ($(this).hasClass("egg4")) {
				$(this).attr('src', 'assets/images/DragonEgg4.gif');	
			}
		});
	}
	onHover();


	function endHover () {
		$(".eggImage").on("mouseout", function(){
			console.log("You're done hovering");
			if ($(this).hasClass("egg1")) {
				$(this).attr('src', 'assets/images/DragonEgg1Start.png');	
			}
			if ($(this).hasClass("egg2")) {
				$(this).attr('src', 'assets/images/DragonEgg2Start.png');	
			}
			if ($(this).hasClass("egg3")) {
				$(this).attr('src', 'assets/images/DragonEgg3Start.png');	
			}
			if ($(this).hasClass("egg4")) {
				$(this).attr('src', 'assets/images/DragonEgg4Start.png');	
			}
		});
	}
	endHover();


	function newGame() {

		counter = 0;
		$('#yourScore').text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min)+1);
			}

		var numberToGuess = randomIntFromInterval(19,120);

		$('.value').text(numberToGuess);


		$('.eggImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
		    $('#yourScore').text(counter);

			//determine user's win 
		    if (counter == numberToGuess){
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      console.log(wins)
		      $('#dragonEggs').empty();
		      newEggs();
		      newGame();
			
			//determine user losses	  
		    } else if ( counter > numberToGuess){
		        $('#status').text('You lost!');
		        losses ++;
		        $('#loss').text(losses);
		        console.log(losses)
		        $('#dragonEggs').empty();
		        newEggs();
		        newGame();
		    }
		});
	}

});