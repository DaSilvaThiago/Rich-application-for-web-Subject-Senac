self.addEventListener('message', function(event){
    let inputNumber = event.data;
    let square = inputNumber*inputNumber;
    this.self.postMessage(square);
});