function animal(){

var tipoAnimal = prompt("Digite o tipo de animal Mamifero, Ave ou Réptil:").toLowerCase();

    if (tipoAnimal === "mamifero"){
        var classificacao1 = prompt("O mamífero é quadrúpede, bípede, voador ou aquatico ?").toLowerCase();
            if (classificacao1 === "quadrupede"){
                var classificacao1_2 = prompt("O quadrupete é Carnivoro ou Onivoro ?").toLowerCase();
                    if (classificacao1_2 === "carnivoro"){
                        alert("O animal é um leão.")
                    }
                        else {
                            alert("O animal é um cavalo.")
                        }
            }  
            
            else if (classificacao1 === "bipede"){
                var classificacao1_3 = prompt("O Bipede é Onívoro ou Frutivoros ?").toLowerCase();
                if (classificacao1_3 === "onivoro"){
                    alert("O animal é homem.")
                }
                    else {
                        alert("O animal é um macaco.")
                    }
            }  
            else if (classificacao1 === "aquatico"){
                        alert("O animal é uma baleia.")
                    }                 
            else {
                alert("O animal é um Morcego.")
                    }
    }
    
    else if (tipoAnimal === "ave"){
        var classificacao2 = prompt("A ave é Não-voadoras ?").toLowerCase();
            if (classificacao2 === "nao voa"){
                var classificacao2_2 = prompt("O animal que não voa é Tropical ou polar ?").toLowerCase();
                    if (classificacao2_2 === "tropical"){
                        alert("O animal é um Avestruz.")
                    }
                    else {
                        alert("O animal é um Piguim.")
                    }
            }

            else if ( classificacao2 === "nadador"){
                alert("O animal é um Pato.")
            }
            else {
                alert("O animal é uma Águia.")
            }

    }

    else {
        var classificacao3 = prompt("O reptel tem casco, é carnivoro ou tem patas?").toLowerCase();
            if (classificacao3 === "com casco"){
                alert("O animal é uma tartaruga.")
            }
            else if (classificacao3 === "carnivoro"){
                alert("O animal é um crocodilo.")
            }
            else {
                alert("O animal é uma cobra.")
            }
    }

}

