function Calcular(){

let Total_Parcelas = Number(document.getElementById('Total_Parcelas').value);
    let Parcelas_pagas = Number(document.getElementById('Parcelas_pagas').value);   
    let total_pago = (Total_Parcelas - Parcelas_pagas);

    document.getElementById('total_pago').innerHTML = "Você já pagou " + Parcelas_pagas + " parcelas, ainda resta, " + total_pago ;

}