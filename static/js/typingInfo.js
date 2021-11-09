const infos = ["Hello there!", "I'm Golnar Kaviani", "A recent Computer Science graduate and a full-stack developer trainee", "I enjoy coding and problem solving", "You can find out more out me here"];
const classNames=["typing","myName","education","likes","findOut"]
var index = 0;

async function typeHelloThere() {
    const timer = ms => new Promise(res => setTimeout(res, ms))
    

    for(var count=0 ; count < infos.length ; count++ ){
        var letter = "";
        var text=infos[count];
        var class_name=classNames[count];
        const helloThere = document.querySelector(`.${class_name}`);

        while(letter.length !== text.length){  
            await timer(50) 
            letter = text.slice(0, ++index);
            helloThere.textContent = letter;
        }
        index = 0;
        clearInterval(run)
        await timer(1500)
        
    }
        
    }
 


async function typeMyName(){
    const myName = document.querySelector('.myName');
    myName.textContent= "I'm Golnar, a recent Computer Scienct graduate";
    myName.style.transition = "0.5s";
}


const run = setInterval(typeHelloThere, 500);

