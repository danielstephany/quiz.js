var Quiz_UI = {
	display: function() {
		if(quiz.isOver()) {
			this.displayScore();
		} else {
			this.displaynext();
		}
	},


	displayScore: function() {
		var element = document.getElementById("question");
		element.innerHTML = "Well done, you scored " + quiz.score + " out of " + quiz.quizQuestions.length;
	},

	displaynext: function() {
		this.displayQuestion();
		this.displaychoices();
	},

	//display question
	displayQuestion: function() {
	var element = document.getElementById("question");
	element.innerHTML = quiz.currentQuestion().questions;
	},

	buttonDisplay: function() {
		var button = document.getElementById("nextQuestion");
		button.style.display = "inline-block";
	},

	buttonHide: function() {
		var button = document.getElementById("nextQuestion");
		button.style.display = "none";
	},

	//bind event handler to question
	displaychoices: function() {
		for (var i = 0; i < quiz.currentQuestion().choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = quiz.currentQuestion().choices[i];
			this.guessEventHandler("guess" + i, quiz.currentQuestion().choices[i]);
		}
	},

	//attatch button elements to event handler and have it check the guess.
	guessEventHandler: function(id, guess) {
		var element = document.getElementById(id)
		element.onclick = function() {
			quiz.makeGuess(guess);
			Quiz_UI.display();
		};
	}

};