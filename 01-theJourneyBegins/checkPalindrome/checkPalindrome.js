// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true.



const checkPalindrome = (inputString) => {
    const reverseString = inputString.split('').reverse().join('');
    return inputString === reverseString;
}

console.log(checkPalindrome('aabaa'));


