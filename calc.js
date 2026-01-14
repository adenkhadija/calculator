/*
put sure the buttons appears on the screen 
and every button is working correctly 
*/

//console.dir(document); 


let display = document.getElementById('screen'); // node object

let memory = null; 
let operation = null; 
let waiting2value = false; 
let firstvalue = null; 
let specialButton = null;
let base = null; 

function append (value){
    // click on button , display on screen
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

function disappear (){
    display.textContent = "0"; 
}; 

function MSstore (){
    // storing the privious value 
    memory = display.textContent
    console.log(memory)

}; 

function MR (){
    // received what is saved in MS 
    display.textContent = memory; 
}; 

function setOperation (operand){
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
    //console.log('current', current); 

};

function exp(){
    base = display.textContent; 
    operation = 'xʸ'; 
    waiting2value = true; 

 
}; 

    // if (operation === '+'){
    //     result = firstvalue + secondvalue; 
    // }else if (operation === '-'){
    //     result = firstvalue - secondvalue; 
    // }else if (operation === 'x'){
    //     result = firstvalue * secondvalue; 
    // }else if (operation === '÷'){
    //     result = firstvalue / secondvalue; 
    // }
    // display.textContent = result; 
    


/*

function operation(mathOperand){

    // display.textContent = mathOperand;
    // if the last character is an operad --> block
    // let operation = mathOperand; 
    // console.log('mathOperand', mathOperand); 
    
    // let lastPosition = display.textContent.length; 
    // let operators = ['x','+','-','÷']; 
    // //console.log(display.textContent[lastPosition-1]);

    // if (operators.includes(display.textContent[lastPosition - 1])) {
    //     return
    // }

    // display.textContent += mathOperand;
    // console.log('mathOperand', mathOperand); 


}; 



function assignment(mathOperand){

    // evaulation 
    // let current = display.textContent;
    // console.log(current);

    // let expr = current;
    // expr = expr.replaceAll("x", "*");
    // expr = expr.replaceAll("÷", "/");
    // console.log('expression', expr); 



    // // //Convert your display string into a format that can be evaluated:


    // // // }
    // let result = eval(expr); 
    // console.log("result", result); 
    // display.textContent = result ; 
}; 

*/ 

// When the user presses =, the calculator should:
// Read the current display expression
// Validate it’s evaluatable
// Compute the result
// Replace the display with the result
// Set up the next inputs (continue calculating)
 







// const allButtons = document.querySelectorAll('.buttons button');
// const display = document.querySelector('.screen'); 
// const operation = document.querySelector('.math'); 



// allButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     display.textContent += button.textContent;
//     //console.log('dispaly now', display.textContent); 
//   });
// });

// const clearButton = document.querySelector('.clear'); 

// // C button - clear the screen 

// clearButton.addEventListener('click', () => {
//     display.textContent = ''; 
//     }) ; 

// // operations -- 

// operation.forEach(operand => {
//     operand.addEventListener('click', () =>{
//         // addition - if click + --> perform addition calculation  
        

//     }); 

//     }); 







// const buttons = document.querySelectorAll('.buttons button');

// allButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     console.log('Button clicked');
    //screen.textContent = allButtons.textContent; 

//   });
// });


let kd = 'khadija'; 

let MyFunc = function () {
    return 'khadija' ; 
}

let kdha = {
    name: 'khadija', 
}

let kdh = MyFunc(); 

let kdhar = kdha.name; 

let Khadija = true; 

function kdja() {
    return khhar + 'taofeek'
}

let Jamaica = {
    name: 'ja'
}

