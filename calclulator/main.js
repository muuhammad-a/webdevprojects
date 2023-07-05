let screenPrenter = document.getElementById("screen");
let result = document.getElementById("result");
let canc  = document.getElementById('canc');

function addNum(num){
    screenPrenter.innerHTML += num;
}

result.addEventListener('click', function(){
    screenPrenter.innerHTML = eval(screenPrenter.value);
})

canc.addEventListener('click', function(){
    screenPrenter.innerHTML = '';
})