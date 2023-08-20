let inputHTML = document.querySelector('input');
let outputHTML = document.querySelector('p');

const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

inputHTML.addEventListener('input', () => {
    outputHTML.innerHTML = "Output: " + convertToText(inputHTML.value);
})

function convertToText(number) {

    if(number == 0) 
        return "zero";
    else if(number.length >= 16)
        return "number should be less than 15 characters.";
    else
        return convertTrillion(number);
    
    function convertTens(number) {
       if(number < 10)
            return ones[number];

        else if(number >= 10 && number < 20) 
            return teens[number - 10];

        else if(number >= 20 && number <= 99) 
            if(number % 10 != 0)
                return tens[Math.floor(number / 10)] + '-' + ones[number % 10];
            else
                return tens[Math.floor(number / 10)];
        else 
            return '';

    }
    function convertHundreds(number) {
        if(number > 99)
            return ones[Math.floor(number / 100)] + ' hundred ' + convertTens(number % 100);
        else 
            return convertTens(number);
    }
    function convertThousands(number) { 
        if(number > 999) 
            return convertHundreds(Math.floor(number / 1000)) + ' thousand ' + convertHundreds(number % 1000);
        else 
            return convertHundreds(number);
    }
    function convertMillions(number) {
         if(number > 999999) 
            return convertThousands(Math.floor(number / 1000000)) + ' million ' + convertThousands(number % 1000000);
        else 
            return convertThousands(number);
    }
    function convertBillion(number) {
        if(number > 999999999)
            return convertMillions(Math.floor(number / 1000000000)) + ' billion ' + convertMillions(number % 1000000000);
        else    
            return convertMillions(number);
    }
    function convertTrillion(number) {
        if(number > 999999999999)
            return convertBillion(Math.floor(number / 1000000000000)) + ' trillion ' + convertBillion(number % 1000000000000);
        else    
            return convertBillion(number);
    }

}