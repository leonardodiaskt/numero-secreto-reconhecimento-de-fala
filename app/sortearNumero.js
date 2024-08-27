const minValue = 1;
const maxValue = 1000;

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
 
const numeroSecreto = numeroAleatorio();

function numeroAleatorio(){
    return parseInt(Math.random()*maxValue+1);
};

console.log(numeroSecreto)

const spanMinValue = document.getElementById("menor-valor");
spanMinValue.innerHTML = minValue;

const spanMaxValue = document.getElementById("maior-valor");
spanMaxValue.innerHTML = maxValue;