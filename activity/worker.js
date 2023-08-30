self.addEventListener('message', function(event){
    let number = event.data;
    if("square" in number){
        let square = number.square;
        square *= square;
        this.self.postMessage({"square":square});
    }
    if("factorial" in number){
        let factorial = number.factorial;
        let res = 1;
        for (let index = factorial; index > 0; index--) {
            res = index*res;
        }
        this.self.postMessage({"factorial":res});
    }
    if("base" in number && "height" in number){
        let base = number.base;
        let height = number.height;
        let res = (base * height) / 2;
        this.self.postMessage({"triangule":res});
    }
})