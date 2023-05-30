// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// solution(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

const palindromeRearranging = (inputString) => {
    let inputArr = inputString.split('');
    let count = 0;
    let obj = {};
    inputArr.forEach((letter) => {
        if (!obj[letter]) {
            obj[letter] = 1;
        } else {
            obj[letter]++;
        }
    });
    for (let key in obj) {
        if (obj[key] % 2 !== 0) {
            count++;
        }
    }
    return count > 1 ? false : true;
}

console.log(palindromeRearranging('aabb')); // true
console.log(palindromeRearranging('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc')); // false