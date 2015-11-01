var questions = [
	 new Questions("Which character used swords in combat?", ["Michelangelo", "Leonardo", "Donatello"], "Leonardo"),
	 new Questions("What is the name of the turtles master?", ["Sliver", "Splinter", "Oak"], "Splinter"),
	 new Questions("Which character used twin sai in combat?", ["Donatello", "Leonardo", "Raphael"], "Raphael"),
	 new Questions("What is the name of the turtles biggest enemy?", ["The Blender", "The Shredder", "The Slicer"], "The Shredder"),
	 new Questions("Which character used the bow staff in combat?", ["Donatello", "Raphial", "Michelangelo"], "Donatello"),
	 new Questions("Who is the turtles main female companion?", ["April O’Neil", "May Jenson", "Jen Smith"], "April O’Neil"),
	 new Questions("Which character used nunchucks in combat?", ["Leonardo", "Michelangelo", "Raphial"], "Michelangelo")
];

var quiz = new Quiz(questions);

Quiz_UI.display(); 