let buffer = '0';


function buttonclick(value){
     if (isNaN(parseInt(value))){
        handleSymbl(value);
    }else {
        handleNumber(value);
    }
}


function handleNumber(value){
    if(buffer === '0'){
        buffer = Number;
    }else{
        buffer += Number;
    }
}
function handleSymbl(){
    console.log('symbel');
}

function init(){
    console.log("helloooooooooooo")
    document.querySelector('.calc-buttuns')

        .addEventListener("click", function(event) {
            buttonclick(event.target.innerText);

        });
}

init();
