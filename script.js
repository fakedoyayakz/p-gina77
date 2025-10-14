let display = document.getElementyId("display");
let currentInput = ""
let currentOperator = ""


function appendNumber(value){
    currentInput += value
    display.textContent = currentInput
}

function appendOperator(operator){
    if(currentInput === "" && operator !== ".") return
    currentInput += operator;
    display.textContent = currentInput;
}

function calculate(){
    try {

    } catch(error){

    }
}
