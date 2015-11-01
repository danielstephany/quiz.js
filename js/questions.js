var Questions = function(question, choices, answer) {
	this.questions = question;
	this.choices = choices;
	this.answer = answer;
}

Questions.prototype.isCorrect = function(guess) {
return this.answer === guess;
}