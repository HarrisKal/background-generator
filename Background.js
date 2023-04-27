let h3 = document.querySelector('h3');
let input1 = document.querySelector('.color1');
let input2 = document.querySelector('.color2');
let body = document.querySelector('body');

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " + 
    input1.value + ", " + 
    input2.value +")";
    h3.textContent = body.style.background + ";";
}

input1.addEventListener("input", setGradient);
input2.addEventListener("input", setGradient);
