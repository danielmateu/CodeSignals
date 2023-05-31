// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// solution(inputArray) = 3.

// For inputArray = [2, 9, 1, 0], the output should be
// solution(inputArray) = 8.

const arrayMaximalAdjacentDifference = (inputArray) => {
    let maxDiff = 0;
    for (let i = 0; i < inputArray.length; i++) {
        /* `let diff = Math.abs(inputArray[i] - inputArray[i + 1]);` is calculating the absolute
        difference between the current element and the next element in the input array. The
        `Math.abs()` function is used to ensure that the difference is always a positive value. */
        let diff = Math.abs(inputArray[i] - inputArray[i + 1]);
        if (diff > maxDiff) {
            maxDiff = diff;
        }
    }
    return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));