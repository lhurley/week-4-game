$(document).ready(function() {
//global variables
	dragonEggs = ['assets/images/DragonEgg1Start.png','assets/images/DragonEgg2Start.png','assets/images/DragonEgg3Start.png','assets/images/DragonEgg4Start.png'];

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
				//here we will going to determine the random number 
				//this number is the wining number if the user gusse correctly
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
			imageEgg.attr('src', dragonEggs[i]);
			imageEgg.attr('alt', 'dragonEggs');
			imageEgg.addClass('eggImage')
			$('#dragonEggs').append(imageEgg);
		}
	}

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