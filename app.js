var display = document.getElementById('display');

function btn(a){
    display.value += a;
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

