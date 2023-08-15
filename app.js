let inputHTML = document.querySelector('input');
let outputHTML = document.querySelector('p');

inputHTML.addEventListener('input', convertToText)

function convertToText() {
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let tens = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let firstDigitOfInput, secondDigitOfInput, thirdDigitOfInput;

    if(inputHTML.value < 0) {
        outputHTML.textContent = `Output: negative ${ones[inputHTML.value.slice(1)]}`;
    }
    
    else if(inputHTML.value < 20) {
        outputHTML.textContent = `Output: ${ones[inputHTML.value]}`;
    }

    else if(inputHTML.value.length == 2) {
        firstDigitOfInput = inputHTML.value.slice(0,1);
        secondDigitOfInput = inputHTML.value.slice(1);
        outputHTML.textContent = `Output: ${tens[firstDigitOfInput]}${inputHTML.value % 10 ? '-'+ones[secondDigitOfInput] : ''}`;
    }

    else if(inputHTML.value.length == 3) {
        firstDigitOfInput = inputHTML.value.slice(0,1);
        secondDigitOfInput = inputHTML.value.slice(1,2);
        thirdDigitOfInput = inputHTML.value.slice(2);
        outputHTML.textContent = `Output: ${ones[firstDigitOfInput] + ' hundred ' + tens[secondDigitOfInput]}${inputHTML.value.slice(1) % 10 ? '-'+ones[thirdDigitOfInput] : ''} `;
        console.log(thirdDigitOfInput);
    }

}