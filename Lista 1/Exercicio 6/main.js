function Calcular(){

    let aluno = String(document.getElementById('aluno').value);
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let numero3 = Number(document.getElementById('numero3').value);
    let result = (numero1 + numero2 + numero3)/3 ;
    document.getElementById('result').innerHTML = "Olá "+ aluno +" sua nota foi: "+ result;
    //console.log("O resultado é ", result)
    
    }