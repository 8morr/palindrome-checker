const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

function checkInput() {
    const input = textInput.value.trim();

    if (input === "") {
        alert("Please input a value");
        return false
    }

    return true;
}

function isPalindrome(str) {
    const input = str.toLowerCase().replace(/[\W_]/g, '');
    const length = input.length;

    for (let i = 0; i < length / 2; i++) {
        if (input[i] !== input[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function showResult() {
    const input = textInput.value.trim().toLowerCase();

    if (isPalindrome(input)) {
        resultDiv.innerHTML = `${textInput.value} is a palindrome`;
    } else {
        resultDiv.innerHTML = `${textInput.value} is not a palindrome`;
    }
}

checkButton.addEventListener("click", () => {
    if (checkInput()) {
        showResult();
    }
});

textInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        if (checkInput()) {
            showResult();
        }
    }
});