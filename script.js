const checkButton = document.querySelector('#check-btn');
const inputValue = document.querySelector('#text-input');
const result = document.querySelector('#result');

if (!checkButton) console.error("Check ID name is HTML File");

if (!inputValue) console.error("Check ID name is HTML File");

const displayContainer = document.createElement('h2');
checkButton.addEventListener('click', () => {
    let str = inputValue.value;
    if (str === "") {
        alert('Please input a value');
    } else {
        displayContainer.innerText = ``;

        let flag = true;
        let properString = ""; // empty string to store the string except special characters

        for (let i = 0; i < str.length; i++) {
            if ((str[i] >= '0' && str[i] <= '9') || (str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
                if (str[i] >= 'A' && str[i] <= 'Z') properString += str[i].toLowerCase();
                else properString += str[i];
            }
        }
        console.log(properString);

        for (let i = 0; i < properString.length/2; i++) {
            if (properString[i] != properString[properString.length-i-1]) {
                flag = false;
                break;
            }
        }

        displayContainer.innerText = (flag === true) ? `${str} is a palindrome` : `${str} is not a palindrome`;
        result.appendChild(displayContainer)
        inputValue.value = "";
    }
});