const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`is ${el1} bigger than ${el2}?`, function(answer){
        if(answer === "yes"){
          callback(true);
        }
        else {
          callback(false);
        }
        
  });
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i == arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
  else {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
      madeAnySwaps = false;
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps,outerBubbleSortLoop);
      }
      else {
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps,outerBubbleSortLoop);
      }
    });
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

// askIfGreaterThan(1, 2, function(bool) {
//   console.log(bool);
//   // reader.close();
// });
// innerBubbleSortLoop([1,2,10,5,3,7,1],0, true, function(madeAnySwaps) {
//     console.log("madeAnySwaps", madeAnySwaps );
// });
