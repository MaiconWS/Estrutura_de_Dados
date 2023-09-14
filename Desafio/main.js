function animal(){

var tipoAnimal = prompt("Digite o tipo de animal Mamifero, Ave ou Réptil:").toLowerCase();

    if (tipoAnimal === "Mamifero"){
        String.classificacao1 = prompt("O mamífero é quadrúpede, voador ou bípede?").toLowerCase();
            if (classificacao1 === "Quadrupete"){
                String.classificacao1_2 = prompt("O quadrupete é Carnivoro ou Onivoro ?").toLowerCase();
                    if (classificacao1_2 === "Carnivoro"){
                        alert("O animal é um leão.")
                    }
                        else {
                            alert("O animal é um cavalo.")
                        }
            }  
            
            else if (classificacao1_2 === "voador"){
                alert("O animal é um Morcego.")
    }
        
            else {
                alert("O animal é um Morcego.")
                    }
    }
    
    else if (tipoAnimal === "Ave"){
        String.classificacao2 = prompt("A ave é Não-voadoras ?").toLowerCase();
            if (classificacao2 === "não-voadoras"){
                String.classificacao2_2 = prompt("O animal que não voa é Tropical ou polar ?").toLowerCase();
                    if (classificacao2_2 === "Tropical"){
                        alert("O animal é um Avestruz.")
                    }
                    else {
                        alert("O animal é um Piguim.")
                    }
            }

            else if ( classificacao2 === "Nadadoras"){
                alert("O animal é um Pato.")
            }
            else {
                alert("O animal é uma Águia.")
            }

    }

    else {
        var classificacao3 = prompt("O reptel tem casco ou não tem casco ?").toLowerCase();
            if (classificacao3 === "com casco"){
                alert("O animal é uma tartaruga.")
            }
            else if (classificacao3 === "carnivoros"){
                alert("O animal é um crocodilo.")
            }
            else {
                alert("O animal é uma cobra.")
            }
    }

}

