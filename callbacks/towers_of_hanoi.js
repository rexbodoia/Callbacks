const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor(){
    this.towers = [[1,2,3], [], []];
  }
  
  promptMove(callback) {
    console.log(this.towers);
    let startTowerIdx;
    let endTowerIdx;
    reader.question("pick two towers (1,2)... ", function(answer) {
      let arr = answer.split(",");
      startTowerIdx = parseInt(arr[0]);
      endTowerIdx = parseInt(arr[1]);
      callback(startTowerIdx, endTowerIdx);
    });
  }
  
  isValidMove(startTowerIdx, endTowerIdx) {
    if (![0,1,2].includes(startTowerIdx) || ![0,1,2].includes(endTowerIdx)){
      return false;
    }
    if (this.towers[endTowerIdx].length === 0) {
      return true;
    }
    if (this.towers[startTowerIdx].last > this.towers[endTowerIdx].last){
      return false;
    }
  }
}



// let g = new Game();
// g.promptMove(function(startTowerIdx, endTowerIdx) {
//   console.log(startTowerIdx, endTowerIdx);
// });