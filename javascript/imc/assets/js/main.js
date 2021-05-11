const form = document.querySelector('#formulario');
let p = document.createElement('p');


form.addEventListener('submit', (e) => {
    p.innerHTML = '';
    p.classList.remove();
    e.preventDefault();
    // console.log('Evento prevenido');
    // setResultado("Testando envio de mensagem para a div")

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        mostraErro();
        return;
    }

    if (!altura) {
        setResultado('Altura inválido', false);
        mostraErro();
        return;
    }

    const imc = getImc(peso, altura);
    getNivelImc(imc);
    console.log(imc);

})

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}


function criaP(){
    p = document.createElement('p');
    resultado.appendChild(p)
    return p;
}


function setResultado(msg, isValid){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';
    // const p = document.createElement('p');
    // p.classList.add('paragrafo-resultado');
    // p.innerHTML = `<p>${msg}</p>`;
    // resultado.appendChild(p);

    const p = criaP();

    p.innerHTML = msg;

}

function mostraErro(){
    p.classList.add('paragrafo-error');

    document.getElementsByName("myButton")[0].disabled = true;

    setTimeout(() => {
        p.innerHTML = '';
        p.classList.remove('paragrafo-error');
        document.getElementsByName("myButton")[0].disabled = false;
    }, 5000);
}

function mostraNivelNormal(){
    p.classList.add('paragrafo-resultado-normal');

    document.getElementsByName("myButton")[0].disabled = true;

    setTimeout(() => {
        p.innerHTML = '';
        p.classList.remove('paragrafo-resultado-normal');
        document.getElementsByName("myButton")[0].disabled = false;
    }, 5000);
}

function mostraNivelAlerta(){
    p.classList.add('paragrafo-resultado-alerta');

    document.getElementsByName("myButton")[0].disabled = true;

    setTimeout(() => {
        p.innerHTML = '';
        p.classList.remove('paragrafo-resultado-alerta');
        document.getElementsByName("myButton")[0].disabled = false;
    }, 5000);
}

function mostraNivelPerigo(){
    p.classList.add('paragrafo-resultado-perigo');

    document.getElementsByName("myButton")[0].disabled = true;

    setTimeout(() => {
        p.innerHTML = '';
        p.classList.remove('paragrafo-resultado-perigo');
        document.getElementsByName("myButton")[0].disabled = false;
    }, 5000);
}

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobre peso', 
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    criaP();

    if (imc > 40) {
        mostraNivelPerigo();
        p.innerHTML = nivel[5];
    } else if (imc >35){
        mostraNivelPerigo();
        p.innerHTML = nivel[4];
    } else if (imc >30){
        mostraNivelPerigo();
        p.innerHTML = nivel[3];
    } else if (imc >25){
        mostraNivelAlerta();
        p.innerHTML = nivel[2];
    } else if (imc >18.5){
        mostraNivelNormal();
        p.innerHTML = nivel[1];
        console.log(nivel[1]);
    } else {
        mostraNivelAlerta();
        p.innerHTML = nivel[0];
    }
}
