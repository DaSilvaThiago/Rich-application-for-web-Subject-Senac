let worker = new Worker('worker.js')


worker.addEventListener('message', function(event){ 
    let number = event.data;
    if("square" in number){
        let response = document.getElementById('squareResponse');
        response.textContent = "The square root of the number is " + number.square;
    }
    if("factorial" in number){
        let response = document.getElementById('factorialResponse');
        response.textContent = "The factorial of the number is " + number.factorial;
    }
    if("triangule" in number){
        let response = document.getElementById('trianguleResponse');
        response.textContent = "The area of that triangule is " + number.triangule;
    }
})

function calculateSquare(){
    let number = document.getElementById('square').value;
    worker.postMessage({"square":number});
}

function calculateFactorial(){
    let number = document.getElementById('factorial').value;
    worker.postMessage({"factorial":number});
}

function calculateTriangule(){
    let number = document.getElementById('base').value;
    let number2 = document.getElementById('height').value;
    worker.postMessage({"base":number, "height":number2});
}