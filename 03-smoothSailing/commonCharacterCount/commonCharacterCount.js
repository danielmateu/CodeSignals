// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

const commonCharacterCount = (s1, s2) => {
    let count = 0;
    let s1Arr = s1.split('');
    let s2Arr = s2.split('');
    s1Arr.forEach((letter) => {
        if (s2Arr.includes(letter)) {
            count++;
            s2Arr.splice(s2Arr.indexOf(letter), 1);
        }
    });
    return count;
}

console.log(commonCharacterCount('aabccsdf', 'adcaasdf')); // 3