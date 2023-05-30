// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

// Example

// For inputArray = [1, 1, 1], the output should be
// solution(inputArray) = 3.

const arrayChange = (inputArray) => {
    let count = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] >= inputArray[i + 1]) {
            let difference = inputArray[i] - inputArray[i + 1] + 1;
            inputArray[i + 1] += difference;
            count += difference;
        }
    }
    return count;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([1, 2, 1]));