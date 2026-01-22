
let display = document.getElementById('screen'); // node object

let memory = null; 
let operation = null; 
let waiting2value = false; 
let firstvalue = null; 
let specialButton = null;
let base = null; 

function append (value){
    // click on button , displays on screen
    // concat --> if values = 0 
    // if (display.textContent === '0'){
    //     display.textContent = value; 
    // } else {
    //     // concat 
    //     display.textContent += value; 
    // }
    // boolean expression? expressionIfTrue : expressionIfFalse
    
    // display.textContent ==='0'? display.textContent = value: display.textContent += value; 
    if (waiting2value) { // true 
        display.textContent = value; 
        waiting2value = false; 
    } else{
        display.textContent ==='0'? 
        display.textContent = value: // 4
        display.textContent += value; 

    }; 

}; 

function decimal (){
    // add . to the current value 

    if (display.textContent.includes('.')){
       return
    }
    
    display.textContent += '.';
    
}; 

// function disappear (){
//     display.textContent = "0"; 
// }; 

const disappear = ()  =>{
    display.textContent = '0'; 
}; 

// function MSstore (){
//     // storing the privious value 
//     memory = display.textContent
//     console.log(memory)

// }; 

const MSstore = () => {
    memory = display.textContent; 
}; 


function MR (){
    // received what is saved in MS 
    display.textContent = memory; 
}; 

// function setOperation (operand){
//     operation = operand; // +
//     waiting2value = true; 
//     firstvalue = parseInt(display.textContent); 

// }; 

const setOperation = (operand) => {
    operation = operand; // +
    waiting2value = true; 
    firstvalue = parseInt(display.textContent); 

}; 

function calculate () {
    // press = button --> display.textcontent = result 
    // which operation to perform 
    let secondvalue = parseInt(display.textContent); 
    let result = null; 
    
    // switch statement 
    switch(operation){
        case '+': 
        result = firstvalue + secondvalue; 
        break; 
        case '-': 
        result = firstvalue - secondvalue; 
        break; 
        case 'x': 
        result = firstvalue * secondvalue; 
        break; 
        case '÷': 
        result = firstvalue / secondvalue; 
        break; 
        case 'xʸ':
        result = Math.pow(base,secondvalue); 
        break;
    }
    display.textContent = result;


    if ((operation == '÷') && secondvalue === 0){
        display.textContent = 'Cannot divide by zero'; 
 
    }; 
    
    waiting2value = true; 

}; 

function special (sign){
    specialButton = sign; 
    console.log('special button', specialButton); 
    let current = null; 

    switch(specialButton){
        case 'x²': 
        current = display.textContent ** 2; 
        break 
        case '%': 
        current = display.textContent / 100; // 40 * 15% = 6 test case
        break
        case '√': 
        current = Math.sqrt(display.textContent);  
        break
        case '1/x': 
        current = (1/display.textContent); 
        break
        // case 'xʸ': //5^2 --> x = 5 y = 2
        // let base = parseInt(display.textContent); 

        // let power = parseInt(display.textContent); 
        // console.log('power', power); 

        // current = Math.pow(base,power); 

    }
    display.textContent = current; 

};

function exp(){
    base = display.textContent; 
    operation = 'xʸ'; 
    waiting2value = true; 

 
}; 


