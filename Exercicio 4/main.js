   
function Calcular(){
    let saldo = 500
    let ValorDeposito = Number(document.getElementById('ValorDeposito').value);
    let newSaldo = ValorDeposito + saldo; 
    document.getElementById('newSaldo').innerHTML = "O resultado é " + newSaldo;
    
    }