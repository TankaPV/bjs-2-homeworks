// тут вы можете вызывать функции из task.js
function testCase() {
	clock = new AlarmClock();
	clock.addClock("17:44", () => console.log("Пора вставать"), 1);
	clock.addClock("17:45", () => {console.log("Давай, вставай уже!"), clock.removeClock(2)}, 2);
	//clock.addClock("17:45", () => console.log("Иди умываться!"));
	clock.addClock("17:46", () => {console.log("Вставай, а то проспишь!"), clock.clearAlarms(), clock.printAlarms()}, 3);
    clock.addClock("17:47", () => console.log("Вставай, а то проспишь!"), 1);
    clock.printAlarms();
    clock.start();
}

testCase();