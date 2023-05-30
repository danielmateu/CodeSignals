// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.string inputArray

// A non-empty array.

// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 10.

// [output] array.string

// Array of the longest strings, stored in the same order as in the inputArray.

// [JavaScript] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

const inputArray = ["aba", "aa", "ad", "vcd", "aba"];

const solution = (inputArray) => {
    let longestLength = 0;
    let longestWords = [];
    inputArray.forEach((word) => {
        longestLength = longestLength < word.length ? word.length : longestLength;
    });
    inputArray.forEach((word) => {
        if (word.length === longestLength) {
            longestWords.push(word);
        }
    });
    return longestWords;
}

console.log(solution(inputArray));