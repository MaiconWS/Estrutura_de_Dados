   
function Calcular(){
    let numero1 = Number(document.getElementById('numero1').value);
    
    let result = (numero1 ** 2);
    
    document.getElementById('result').innerHTML = "O resultado é " + result;
    //console.log("O resultado é ", result)
    
    }