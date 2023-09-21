a = float(input("Digite o 1° valor: "))
b = float(input("Digite o 2° valor: "))
c = float(input("Digite o 3° valor: "))

menorNumero = 0

if a < b and a < c:
    menorNumero = a
elif b < a and b < c:
    menorNumero = b
else:
    menorNumero = c


print(f"o menor número é: {menorNumero}")