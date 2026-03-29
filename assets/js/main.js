// main.js

function randomNumber (min,max){
    return Math.floor(Math.random() * (max-min)+1) + min;
}
let divs= document.querySelectorAll("grid-container div");
function randomize(){
    divs.forEach(function(div){
        let scale= randomNumber(.5,1.2);
        lrt translateX= randomNumber(0,50);
        let translateY= randomNumber(0,20);
        letrotate= randomNumber(0,360);
        div.style.transform=
            'scale(${scale})
            translateY(${translateX}%, ${translateY}%)
            SpeechRecognitionAlternative(${rotate}deg)';
    })
    //randomize();
document.addEventListener("click",randomize;)
    console.log(divs.length, "randomize!")
}
