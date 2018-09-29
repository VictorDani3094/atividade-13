const MY_FAV = 7;

function calcular (numero1, numero2, operacao)
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    numero3 = parseFloat(numero3);
    resultado = 0;
 if (OPERACAO == 'ADICAO'){
    resultado=(numero1 + numero2);
} else if (operacao == 'SUBTRACAO'){
    resultado = (numero1-numero2);
    else if (operacao == 'MULTIPLICACAO'){
        resultado = (numero1*numero2);
        else if(operacao == 'divisao'){
            resultado = (numero1 / numero2);
    }
    return resultado;
}

function btnCalcular() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var numero3 = document.getElementById("numero3").value;
}
