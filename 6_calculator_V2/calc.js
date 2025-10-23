let buffer = '0';
const display = document.querySelector('.display');

function buttonclick(value){
     if (isNaN(parseInt(value))){
        handleSymbol(value);
    }else {
        handleNumber(value);
    }
    rerender();
}


function handleNumber(value){
    if(buffer === '0'){
        buffer = value;
    }else{
        buffer += value;
    }

}
function handleSymbol(value) {
  switch (value) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "=":
      if (previousOperator === null) {
        // need two numbers to do math
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = +runningTotal;
      runningTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      handleMath(value);
      break;
  }
}

function init(){
    console.log("helloooooooooooo")
    document.querySelector('.calc-buttuns')

        .addEventListener("click", function(event) {
            buttonclick(event.target.innerText);

        });
}

function rerender(){
    display.innerText = buffer;
}

init();
