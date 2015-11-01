var Quiz_UI = {
	display: function() {
		if(quiz.isOver()) {
			this.buttonDisable();
			this.displayScore();
		} else {
			this.displaynext();
		}
	},


	displayScore: function() {
		var element = document.getElementById("question");
		element.innerHTML = "Well done, you scored " + quiz.score + " out of " + quiz.quizQuestions.length + ".";
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
		button.onclick = function() {
			Quiz_UI.buttonHide();
			Quiz_UI.buttonColorReset();
			Quiz_UI.display();
		}
	},

	buttonHide: function() {
		var button = document.getElementById("nextQuestion");
		button.style.display = "none";
	},

	buttonChange: function(id) {
		var element = document.getElementById(id)
		if (quiz.correctAnswer) {
				element.style.background = "#7aad6a";
			} else {
				element.style.background = "#ad706a";
			}
		this.buttonDisable();				
	},

	buttonDisable: function() {
		var buttons = document.getElementsByClassName("select");
		for(var i = 0; i < buttons.length; i++) {
			buttons[i].onclick = "";
		}
	},

	buttonColorReset: function() {
		var buttons = document.getElementsByClassName("select");
		for(var i = 0; i < buttons.length; i++) {
			buttons[i].style.background = "#fff";
		}
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
			Quiz_UI.buttonChange(id);
			Quiz_UI.buttonDisplay();
		};
	}

};