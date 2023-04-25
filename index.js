const { consoleLog } = require("mocha/lib/reporters/base");

function isPalindrome(word) {
  // Write your algorithm here
  palindomic = '';
  for (let j = word.length -1; 0 <= j; j--){
    palindomic += word[j];
  }
  if (palindomic == word){
    return true;
  } 
  else {
    return false;
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
