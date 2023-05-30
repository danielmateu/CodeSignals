// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Example

// For inputString = "(bar)", the output should be
// solution(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// solution(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// solution(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// solution(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim" -> Important!!!

function reverseInParentheses(inputString) {
    const stack = [];
    let result = "";

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === "(") {
            // Push the current result to the stack
            stack.push(result);
            result = ""; // Reset the result
        } else if (inputString[i] === ")") {
            // Reverse the characters in the result and append it to the top of the stack
            const reversed = result.split("").reverse().join("");
            result = stack.pop() + reversed;
        } else {
            // Append the current character to the result
            result += inputString[i];
        }
    }

    return result;
}

// console.log(solution('(bar)')); // rab
console.log(reverseInParentheses('foo(bar(baz))blim')); // foobazrabblim
// console.log(solution('foo(bar)baz(blim)')); // foorabbazmilb
// foobazrabblim
