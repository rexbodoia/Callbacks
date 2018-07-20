class Clock {
  constructor() {
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();
    // this._tick();
    setInterval(this._tick.bind(this), 1000);
  }

   printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    if (this.seconds === 59) {
      if (this.minutes === 59) {
        this.hours += 1;
        this.minutes = 0;
        this.seconds = 0;
      }
      else {
        this.minutes += 1;
        this.seconds = 0;
      }
    } else {
      this.seconds += 1;
    }
    this.printTime();
  }
}

const clock = new Clock();


const readline = require('readline');

const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft === 0) {
    reader.close();
    return completionCallback(sum);
  }
  if (numsLeft > 0){
    reader.question("Give me a number", function (answer) {
      sum += parseInt(answer);
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
