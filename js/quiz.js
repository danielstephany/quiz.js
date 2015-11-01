var Quiz = function(questions) {
	this.quizQuestions = questions;
	this.currentQuestionIndex = 0;
	this.score = 0;
}

Quiz.prototype.makeGuess = function(guess) {
	console.log("guess");
	if(this.currentQuestion().isCorrect(guess)) {
		console.log("correct");
		this.score++;
	} else {
		console.log("wrong");
	}
	this.currentQuestionIndex++;
	console.log(this.currentQuestionIndex);
}

Quiz.prototype.currentQuestion = function() {
	return this.quizQuestions[this.currentQuestionIndex];
}

Quiz.prototype.isOver = function() {
	return this.currentQuestionIndex >= this.quizQuestions.length;
}