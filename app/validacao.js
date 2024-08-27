function validaNumero(chute){
    const numero = +chute;
    if(valorInvalido(numero)){
        console.log("Valor inválido");
    };

    if(valorDiferentePermitido(numero)){
        console.log(`Valor inválido, o número precisa estar entre ${minValue} e ${maxValue}`);
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        
            <button class="btn-jogar id="jogar-novamente">Jogar novamente</button>
        `
    }
    else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }
    else{
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function valorInvalido(numero){
    return Number.isNaN(numero)
}

function valorDiferentePermitido(numero){
    return numero < minValue || numero > maxValue;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})