$(document).ready(function(){
	
	var number;
	var answers = [];
	var correctAnswers = [4, 2, 3, 3, 1, 3, 4, 1];
	var storeValue;
	var counter;
	var rightCounter = 0;
	var wrongCounter = 0;
	var noAnswer = 0
	
	hidequestions();
	hidereset();
	$("#headline").html("<h1>Slogan Trivia</h2>");
	
	function hidequestions() {
		$("#questions").hide();
	};

	function hidereset() {
		$("#reset").hide();
	}

	function starttrivia() {
		$("#questions").show();
		$('input').removeAttr('checked');
		$("#timeLeft").show();
		$("#start").hide();
		hidereset();

		number = 45;
   	counter = setInterval(decrement, 1000);
	};
	
	$("#start").on("click", starttrivia);
		
  function decrement(){
      number--;
      $("#timeLeft").html('<h2>Time Remaining: ' + number + ' seconds</h2>');
      if (number === 0){
        results();
        alert('Time Up!')
      }
  }
  
  function stop(){
      clearInterval(counter);
  }

  $("#done").on("click", results);

  function results() {
      hidequestions();
  		stop();
  		$("#timeLeft").hide()
			$("#log").show()  			

  			for (var i = 1; i < 9; i++) {
			 	storeValue = $( ".question" + i + ":checked" ).val();
			 	answers.push(storeValue);
			  }

			     for(var j = 0; j < answers.length; j++) {
				      console.log(answers[j]);
			     } 

  				    for (var k = 0; k < correctAnswers.length; k++) {
  					
  					     if (answers[k] == correctAnswers[k]) {
  						      rightCounter++;
  						      console.log(rightCounter);
  					     }
  					     else if (answers[k] === undefined){
  						      noAnswer++;
  					     }
  					     else if (answers[k] != correctAnswers[k]) {
  						      wrongCounter++;
  						      console.log(wrongCounter);
  					     }
  					   }

  			$( "#log" ).html("<h3>All Done!!</h3>");

  			$( "#log" ).append("<h3>Correct Answers: " + rightCounter + "</h3>");	
  			
        $( "#log" ).append("<h3>Wrong Answers: " + wrongCounter + "</h3>");

  			$( "#log" ).append("<h3>Unanswered: " + noAnswer + "</h3>");

  			$("#reset").show();
  }

  function reset() {
  	 answers = [];
  	 rightCounter = 0;
  	 wrongCounter = 0;
  	 noAnswer = 0;
  	 var storeValue;
  	 $("#log").hide();
  	 hidereset();
  	 starttrivia();
  }

  $("#reset").on("click", reset);

});