let mainDisplay = document.querySelector('.main');
let subDisplay = document.querySelector('.sub-section');

function numbersAddEventListenerFunc(){
    let numbers = document.querySelectorAll('.number')
    // console.log(numbers)

    for (let number of numbers){
        number.addEventListener('click', function(){
            let input = `${number.innerText}`
            console.log(input);
            mainDisplayFunc(input)
            subDisplayFunc(input)
        })
    }
}

function symbolsAddEventListenerFunc(){
    let symbols = document.querySelectorAll('.symbol')
    //console.log(symbols)

    for (let symbol of symbols){
        symbol.addEventListener('click', function(){
            let identifier = `${symbol.id}`
            symbolSortFunc(identifier)
        })
    }
}

function symbolSortFunc(identifier){
    console.log(identifier)
    if (identifier === 'ac'){
        console.log('AC')
        deleteFunc()
    }
    else if (identifier === 'backspace') {
        console.log('backspace')
        backSpaceFunc()
    }
    else if (identifier === 'percentage') {
        console.log('%')
    }
    else if (identifier === 'divide') {
        // console.log('÷')
        let input = '/'
        mainDisplayFunc(input)
        subDisplayFunc(input)
    }
    else if (identifier === 'multiply') {
        // console.log('x')
        let input = '*'
        mainDisplayFunc(input)
        subDisplayFunc(input)
    }
    else if (identifier === 'minus') {
        // console.log('-')
        let input = '-'
        mainDisplayFunc(input)
        subDisplayFunc(input)
    }
    else if (identifier === 'plus') {
        // console.log('+')
        let input = '+'
        mainDisplayFunc(input)
        subDisplayFunc(input)
        
    }
    else if (identifier === 'equals') {
        // console.log('=')
        equationFunc()
    }
}

function equationFunc(){
    let equation = subDisplay.innerText
    console.log(equation)
    // Check if it's empty
    if (equation === ''){
        mainDisplay.innerText = 0
    }
    else {
        // Check if it has a % sign
        let presence = equation.includes('%')
        // console.log(presence);
        if (presence === false){
            answerFunc(equation);
        }
        else{
            console.log('Present');
        }
    }
}

function answerFunc(equation){
    let answer = Function("return " + equation)();
    mainDisplay.innerText = answer
}

function deleteFunc(){
    mainDisplay.innerText = ''
    subDisplay.innerText=''

}

function backSpaceFunc(){
    let equation = subDisplay.innerText;
    // Store in Array
    const myArray = equation.split("");
    //Remove last element
    myArray.pop();

    //Print last number in sub-display
    let last = myArray.slice(-1);
    let output = last.join("");
    mainDisplay.innerText= output;

    //Join result
    let final = myArray.join("");
    //Append to document
    subDisplay.innerText = final;
}

function mainDisplayFunc(input){
    mainDisplay.innerText = input;
}

function subDisplayFunc(input){
    let equation =subDisplay.innerText
    let finalInput = `${equation}${input}`
    subDisplay.innerText = finalInput;
}


function initialize (){
    numbersAddEventListenerFunc()
    symbolsAddEventListenerFunc()
}
initialize ()