// function getInput() {
//     return console.log(document.getElementById("input").value);
// }

function getInput() {
    document.getElementById("form").submit();
}
// const sentence = getInput()
// console.log(sentence)
// console.log(document.getElementById("input").value);

// const sentence = document.getElementById("input").value;
// !DO EVENT LISTENER THAT WILL FIRE UP WHEN SUBMITTED

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
    return (letter + connect()).split("").reverse().join("");
}

// console.log(sentence)
// console.log(count(sentence));
