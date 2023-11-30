function num(){
    let n = Number(document.getElementById('num1').value);
    let i = 0;
    let tabuada = "";

    while (i <= 10){
        tabuada = (n , " x ", i, " = ",n*1);
        i++
    }
    document.getElementById('textarea').value = tabuada;
}