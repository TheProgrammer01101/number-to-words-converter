let input = document.querySelector('input');
let output = document.querySelector('p');

input.addEventListener('input', ()=> {
    output.innerHTML = 'Output: ' + input.value;
})