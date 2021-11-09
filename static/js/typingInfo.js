var index = 0;
var currentText = "";
var letter = "";

async function typeHelloThere() {
    
    currentText = "Hello there!";   
    var helloThere = document.querySelector('.typing');
    letter = currentText.slice(0, ++index);
    helloThere.textContent = letter;

}

const run = setInterval(typeHelloThere, 150);
