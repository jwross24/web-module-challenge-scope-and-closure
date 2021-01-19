// Stretch Goal 1: Make a function that adds a base number using closures.

function createBase(baseNum) {
    return function (numToAdd) {
        return baseNum + numToAdd;
    };
}

let addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));
