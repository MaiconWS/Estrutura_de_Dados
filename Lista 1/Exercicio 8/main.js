function Calcular(){

    let model_carro = String(document.getElementById('model_carro').value);
    let valorFabrica = Number(document.getElementById('valorFabrica').value);
    let imposto = valorFabrica * (45/100);
    let revendedor = valorFabrica * (25/100);
    let result = (revendedor + imposto + valorFabrica);

    document.getElementById('result').innerHTML = "O modelo : "+ model_carro +", custará: "+ result;
    //console.log("O resultado é ", result)
    
    }


    //1.750

    //3.150