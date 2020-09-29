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

// function add(a, b) {
//     return a + b;
// };

// function subtract(a, b){
//     return a - b;
// };

// function multiply(a, b) {
//     return a * b;
    
// };

// function divide(a, b) {
//     return a / b;
// };


function addToScreen(inNumber){
    const screen = document.querySelector('#screen');
    screen.textContent == "0"? screen.textContent = inNumber: 
    screen.textContent += inNumber;
};

const btn = document.querySelectorAll('.number');

btn.forEach((number) =>{
number.addEventListener('click', function(e) {
    addToScreen(e.target.innerText);
    //console.log(e.target.innerText);
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
    //let a = display.textContent;
    //console.log(a);
    return display.textContent;
    
};

const operates = document.querySelectorAll('.operator')

function thatName (e){
    let operatorName = e.target.id;
    //console.log(operatorName);
    return operatorName;
};


let firstValue = '';

let operationName = '';

operates.forEach((op) =>{
op.addEventListener('click', function(e) {
    firstValue = storeScreenValue();
    clearScreen();
    operationName = thatName(e);

    // if(thatName(e)  != "equals"){
    //     console.log(operate(storeScreenValue, storeScreenValue, thatName(e)))
    // };
    // let operatorName = e.target.id;
    // return operatorName;
})
});

const eq = document.querySelector('#equals');
eq.addEventListener('click', function(e){
    let currentvalue = storeScreenValue();
    firstValue = parseInt(firstValue);
    currentvalue = parseInt(currentvalue);
    clearScreen();
    addToScreen(operate(firstValue, currentvalue, operationName));
    console.log(operate(firstValue, currentvalue, operationName));
    
})



// the next fucntion should take the first display value(a), 
//side-I should log what operator button was pressed, save and return that string
//give each a unique id
//because everytimes an operator is pressed the screen clears to get 
//the second number(b) for the operation, i should look at the current string vaule of the display
//when "=" is pressed (b) is the curretnt display value