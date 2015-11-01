var questions = [
	 new Questions("Which character wore blue and used swords in combat?", ["Leonardo", "Donatello"], "Leonardo"),
	 new Questions("Which character wore orange and used nunchucks in combat?", ["Leonardo", "Michelangelo"], "Michelangelo"),
	 new Questions("Which character wore red and used twin sai in combat?", ["Leonardo", "Raphael "], "Raphael "),
	 new Questions("Which character wore purple and used the staff in combat?", ["Donatello", "Raphial"], "Donatello")
];

var quiz = new Quiz(questions);

Quiz_UI.display(); 