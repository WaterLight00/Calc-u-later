function operate (a, b, operator) {
    switch (operator) {
        case "add":
            result = a + b;
            break;
        case "subtract":
            result = a - b;
            break;
        case "multiply":
            result = a * b;
            break;
        case "divide":
            result = a / b;
            break;
                        
        default:
            break;
    }

return result;
};

function addToScreen(inNumber){
    const screen = document.querySelector('#screen');
    screen.textContent == "0"? screen.textContent = inNumber: 
    screen.textContent += inNumber;
};

const btn = document.querySelectorAll('.number');

btn.forEach((number) =>{
number.addEventListener('click', function(e) {
    addToScreen(e.target.innerText);
    
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
   
    return display.textContent;
    
};

const operates = document.querySelectorAll('.operator')

function thatName (e){

    let operatorName = e.target.id;
   
    return operatorName;
};


let firstValue = '';

let operationName = '';

operates.forEach((op) =>{
op.addEventListener('click', function(e) {
    firstValue = storeScreenValue();
    //clearScreen();
    operationName = thatName(e);

})
});

const eq = document.querySelector('#equals');
eq.addEventListener('click', function(e){
    let currentvalue = storeScreenValue();
    firstValue = parseInt(firstValue);
    currentvalue = parseInt(currentvalue);
    clearScreen();
    addToScreen(operate(firstValue, currentvalue, operationName));
    firstValue = 0;
    console.log(firstValue);

})
 // if a number is pressed after an operator has been selected clear the screen
 // and display the current number beign entered.
 //if a number is not pressed after the operator keep the current number on screedn 
 // if a number is enter and an operator pressed twice the current and first number is the same and the operation of the two is displayed