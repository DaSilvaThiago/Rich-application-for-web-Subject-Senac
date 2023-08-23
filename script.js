let bgColor, txtColor, vname, fonts;

function SetColor(op, color) {
    if(op == 1){
        document.body.style.backgroundColor = color;
        bgColor = color
    }else {
        document.body.style.color = color;
        txtColor = color
    }
}

function setFont(font){
    document.body.style.fontFamily = font;
    fonts = font;
}

function appear(){
    form = document.getElementById("form");
    form.style.display = "block";
}

function Save(){
    localStorage.name = document.getElementById("name").value;
    localStorage.background = bgColor;
    localStorage.textColor = txtColor;
    localStorage.font = fonts;
    form = document.getElementById("form");
    form.style.display = "none";
}
