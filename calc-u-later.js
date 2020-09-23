function add(a, b) {
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b) {
    return a * b;
    
};

function divide(a, b) {
    return a / b;
};

function operate (a, b, operator) {
    return operator(a, b);
};

function addToScreen(inNumber){
    const screen = document.querySelector('#screen');
    screen.textContent += inNumber;
};

const btn = document.querySelectorAll('.number');
// btn.forEach((number) =>{
// number.addEventListener('click', addToScreen);
// });
btn.forEach((number) =>{
number.addEventListener('click', function(e) {
    addToScreen(e.toElement.innerText);
    console.log(e.toElement.innerText);
});
});