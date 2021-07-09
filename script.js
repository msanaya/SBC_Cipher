const sentence = prompt("Enter a sentence:")



function firstAndLast(sentence) {
    const first = sentence.charAt(0);
    const last = sentence.charAt(sentence.length - 1);
    return first + last;
}

function flip() {
    return firstAndLast(sentence).split("").reverse().join("");
}

function connect() {
    return sentence + flip();
}

function count(sentence) {
    const divided = Math.floor(sentence.split(" ").join("").length / 2);
    const nospaces = sentence.split(" ").join("")
    const letter = nospaces.charAt(divided)
    return letter + connect();
}

console.log(sentence)
console.log(firstAndLast(sentence));
console.log(flip());
console.log(connect());
console.log(count(sentence));
