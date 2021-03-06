console.log("hello")
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    var clearText = document.getElementById("clearText").value;
    console.log(clearText)
    firstAndLast(clearText);
    flip(clearText);
    connect(clearText);
    var cipher = (count(clearText));
    console.log(count(clearText));
    displayCoded(cipher);
});

function firstAndLast(sentence) {
    const first = sentence.charAt(0);
    const last = sentence.charAt(sentence.length - 1);
    return first + last;
}

function flip(sentence) {
    return firstAndLast(sentence).split("").reverse().join("");
}

function connect(sentence) {
    return sentence.split(" ").join("") + flip(sentence);
}

function count(sentence) {
    const divided = Math.floor(sentence.split(" ").join("").length / 2);
    const nospaces = sentence.split(" ").join("");
    const letter = nospaces.charAt(divided);
    return letter + connect(sentence).split("").reverse().join("");
};

function displayCoded(cipher) {
    document.getElementById("codedText").innerHTML = cipher
}

function reset() {
    document.getElementById("clearText").value = "";
    document.getElementById("codedText").innerHTML = " ";
}

// document.body.classList.add('js-loading');

// window.addEventListener("load", showPage);

// function showPage() {
//     document.body.classList.remove('js-loading');
// }

function focusInput() {
    document.getElementByID("instructions").focus();
}


