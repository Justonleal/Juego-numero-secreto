let numeroSecreto = generarNumeroSecreto();
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);
  

    if(numeroDelUsuario === numeroSecreto){
         asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'intento': 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
        // el usuario no acerto
        if (numeroDelUsuario > numeroSecreto){
            asignarTextoElemento ('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El número secreto es mayor');
        }
        console.log(numeroSecreto);
   }
        intentos++;
        limpiarCaja();
    return;
}

function limpiarCaja (){
   document.querySelector('#valorUsuario').value = '';
 
}
function generarNumeroSecreto() {
    let Aleatorio =  Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','ya se sortearon todos los números posibles');
    } else {

        if (listaNumerosSorteados.includes(Aleatorio)) {
            return generarNumeroSecreto();
        } else {
             listaNumerosSorteados.push(Aleatorio);
             return Aleatorio;
            }
        }
    }

function condicionesIniciales() {
    asignarTextoElemento('h1','juego del número secreto');
    asignarTextoElemento('p',`indica el número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de juego
    condicionesIniciales();
    //deshabilitar el boton de reiniciar juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales()