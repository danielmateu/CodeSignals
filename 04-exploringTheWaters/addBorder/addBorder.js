// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// solution(picture) = ["*****",
//                      "*abc*",
//                      "*ded*",
//                      "*****"]

const addBorder = (picture) => {
    let border = '*'.repeat(picture[0].length );
    picture.unshift(border);
    picture.push(border);
    picture.forEach((row, index) => {
        picture[index] = '*' + row + '*';
    });
    return picture;
}

console.log(addBorder(["abc", "ded"])); // ["*****", "*abc*", "*ded*", "*****"]