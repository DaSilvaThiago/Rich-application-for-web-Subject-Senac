

let worker = new Worker('worker.js');

worker.addEventListener('message', function(event){
    let square = event.data;
    let resulElement = document.getElementById('result');
    resulElement.textContent = 'O quadrado do número é: '+square;
})

function calculateSquare(){
    let inputElement = document.getElementById('inputNumber');
    let inputNumber = Number(inputElement.value);
    worker.postMessage(inputNumber);
}