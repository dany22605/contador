window.onload = function(){
    let suma = document.getElementById ("suma");
    suma.onclick = aumentar;
    let resta = document.getElementById ("restar");
    resta.onclick = disminuir;
    let borrar = document.getElementById("borrar");
    borrar.onclick = resetear;

}

var contadorValor = 0;

function aumentar(){
    cargarFuncion(++contadorValor);
}
function disminuir(){
    cargarFuncion(--contadorValor);
}
function resetear(){
    contadorValor = 0;
    cargarFuncion(contadorValor);
}

function cargarFuncion(valor){
    document.getElementById("contador").innerHTML = valor;
}