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
    screen.textContent == "0"? screen.textContent = inNumber: 
    screen.textContent += inNumber;
};

const btn = document.querySelectorAll('.number');

btn.forEach((number) =>{
number.addEventListener('click', function(e) {
    addToScreen(e.toElement.innerText);
    console.log(e.toElement.innerText);
});
});

function clearScreen(){
const screen = document.querySelector('#screen');
screen.textContent = '0';
};

const clear = document.querySelector('#clear')
clear.addEventListener('click', clearScreen);

function storeScreenValue(){
    const display = document.querySelector('#screen');
    let a = display.textContent;
    return a;
    
};

const operates = document.querySelectorAll('.operator')
operates.forEach(op => op.addEventListener('click', storeScreenValue)
);
operates.forEach(op => op.addEventListener('click', clearScreen)
);