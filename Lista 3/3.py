a = float(input("Digite o 1° valor: "))
b = float(input("Digite o 2° valor: "))
c = float(input("Digite o 3° valor: "))

maiorNumero = 0

if a > b and a > c:
    maiorNumero = a
elif b > a and b > c:
    maiorNumero = b
else:
    maiorNumero = c


print(f"o maior número é: {maiorNumero}")
