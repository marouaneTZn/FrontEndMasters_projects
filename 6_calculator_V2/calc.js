let buffer = '0';
const display = document.querySelector('.display');

function buttonclick(value){
     if (isNaN(parseInt(value))){
        handleSymbl(value);
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
function handleSymbl(){
    console.log('symbol');
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
