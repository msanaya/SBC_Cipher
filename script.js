const sentence = prompt("Enter a sentence:")
console.log(sentence)

// const firstAndLast = function (sentence) {
//     const sentence.charAt(0) + sentence.charAt(sentence.length - 1);
// };

function firstAndLast(sentence) {
    const first = sentence.charAt(0);
    const last = sentence.charAt(sentence.length - 1);
    return first + last;
}

// const firstAndLast1 = firstAndLast.toString();

// const flip = function (firstAndLast) {
//     const flipped = firstAndLast.split("").reverse().join("");
//     return flipped;
// }

function flip() {
    return firstAndLast(sentence).split("").reverse().join("");
}

function 


console.log(firstAndLast(sentence));
console.log(flip());