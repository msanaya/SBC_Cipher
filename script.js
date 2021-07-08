const sentence = prompt("Enter a sentence:")
console.log(sentence)

function firstAndLast(sentence) {
    return sentence.charAt(0) + sentence.charAt(sentence.length - 1);
}

// function firstAndLast(sentence) {
//     const first = sentence.charAt(0);
//     const last = sentence.charAt(sentence.length - 1);
//     return first + last;
// }

console.log(firstAndLast(sentence));