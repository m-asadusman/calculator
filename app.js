var display = document.getElementById('display');
var operators = ['+','-','*','/','%'];
var power = '**';

function btn(a){
    if (operators.includes(display.value.slice(-1)) && operators.includes(a)){
        return;
    }
    display.value += a
}

function ac(){
    display.value = '';
}

function ce(){
    display.value = display.value.slice(0,-1);
}

function ans(){
    display.value = eval(display.value);
}


