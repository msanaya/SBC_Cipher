// function getInput() {
//     return console.log(document.getElementById("input").value);
// }

console.log("hello")
const submit = document.getElementById("submit");
// var clearText = document.getElementById("clearText").value;



submit.addEventListener("click", () => {
    // e.preventDefault();
    var clearText = document.getElementById("clearText").value;
    console.log(clearText)
    // console.log(firstAndLast(clearText));
    // console.log(flip(clearText));
    // console.log(connect(clearText));

    firstAndLast(clearText);
    flip(clearText);
    connect(clearText);
    var cipher(count(clearText));
    // console.log(count(clearText));
    // console.log(count(sentence));

})


// const sentence = getInput()
// console.log(sentence)z
// console.log(document.getElementById("input").value);

// const sentence = document.getElementById("input").value;
// !DO EVENT LISTENER THAT WILL FIRE UP WHEN SUBMITTED

function firstAndLast(sentence) {
    const first = sentence.charAt(0);
    const last = sentence.charAt(sentence.length - 1);
    return first + last;
}

function flip(sentence) {
    return firstAndLast(sentence).split("").reverse().join("");
}

function connect(sentence) {
    return sentence + flip(sentence);
}

function count(sentence) {
    const divided = Math.floor(sentence.split(" ").join("").length / 2);
    const nospaces = sentence.split(" ").join("")
    const letter = nospaces.charAt(divided)
    // console.log((letter + connect(sentence)).split("").reverse().join(""));
    return letter + connect(sentence).split("").reverse().join("");

}

// console.log(sentence)
// console.log(count(sentence));
