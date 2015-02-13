var Animal = function(s,f,n) {
	this.speed = s;
	this.focus = f;
	this.name = n;
	this.position = 0;
	this.tries = 0;
	this.report = function() {
		return this.name + " is at " + this.position;
	};
	this.run = function() {
		if (this.focus > (Math.random() * 10)) {
			this.position += this.speed;
			this.tries += 1;
		} 
	};
	this.notOver = function() {
		return this.position < distance;
	}
}

var turtle = new Animal(2,9, "Harry"),
		rabbit = new Animal(7,3, "Larry"),
		monkey = new Animal(4,5, "Gary"),
		frog = new Animal(3,6, "Jerry");

var distance = 100;

if (turtle.position > 70) {
	turtle.focus -= 1;
} else if (rabbit.position > 60) {
	rabbit.focus += 0.75;
} else if (monkey.position > 35) {
	monkey.focus -= 3;
} else if (frog.position > 50) {
	frog.focus += 1.25;
}

while (turtle.notOver() && rabbit.notOver() && monkey.notOver() && frog.notOver()) {
	turtle.run();
	rabbit.run();
	monkey.run();
	frog.run();
};

console.log(turtle.report());
console.log(rabbit.report());
console.log(monkey.report());
console.log(frog.report());

if (turtle.position >= 100) {
	var first = document.getElementById('winner');
	first.textContent = 'Harry the turtle!!';
} else if (rabbit.position >= 100) {
	var first = document.getElementById('winner');
	first.textContent = 'Larry the rabbit!!';
} else if (monkey.position >= 100) {
	var first = document.getElementById('winner');
	first.textContent = 'Gary the monkey!!';
} else if (frog.position >= 100) {
	var first = document.getElementById('winner');
	first.textContent = 'Jerry the frog!!';
}

var times1 = document.getElementById('turtleFinish');
times1.textContent = "Steps: " + turtle.tries;

var times2 = document.getElementById('rabbitFinish');
times2.textContent = "Steps: " + rabbit.tries;

var times3 = document.getElementById('monkeyFinish');
times3.textContent = "Steps: " + monkey.tries;

var times4 = document.getElementById('frogFinish');
times4.textContent = "Steps: " + frog.tries;

