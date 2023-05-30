// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// Hints

// sort()

const sortByHeight = (listOfPeople) => {
    let people = [];
    let trees = [];
    listOfPeople.forEach((item, index) => {
        if (item === -1) {
            trees.push(index);
        } else {
            people.push(item);
        }
    });
    people.sort((a, b) => {
        return a - b;
    });
    // console.log({people});
    trees.forEach((tree) => {
        people.splice(tree, 0, -1);
    });
    // console.log({trees});
    return people;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])); // [-1, 150, 160, 170, -1, -1, 180, 190]