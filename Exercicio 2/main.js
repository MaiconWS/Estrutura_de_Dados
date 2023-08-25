function Calcular(){
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let soma = numero1 + numero2;
    let sub = numero1 - numero2;
    let divisao = numero1 / numero2;
    let multi = numero1 * numero2;

    document.getElementById('soma').innerHTML = "O resultado da soma é " + soma;
    document.getElementById('div').innerHTML = "O resultado da divisão é " + divisao;
    document.getElementById('sub').innerHTML = "O resultado da subtração é " + sub;
    document.getElementById('multi').innerHTML = "O resultado da multiplicação é " + multi;
    //console.log("O resultado é ", result)
    
    }