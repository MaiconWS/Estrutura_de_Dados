num = int(input("Digite um numero que deseje ver sua tabuada: "))

contador = 0

while contador < 11:
    print(f"{num} x {contador} = {num * contador}")
    contador  = contador + 1