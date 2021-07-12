/**
 * RESULTADO QUE QUEREMOS:

Carlos Gabriel Succi tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.92
Luiz Otávio nasceu em: 
 */

const nome = "Carlos Gabriel";
const sobrenome = "Succi";
const idade = 20;
const peso = 70;
const altura = 1.8;
let imc = peso / (altura * altura) // Usaremos let pois iremos mudar os valores constantemente da variavel
let anoNascimento = 2021 - idade;

// Template string
// Basta usar crases para envolver o seu texto e as variaveis com ${variavel}
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg \ntem ${altura} de altura e seu IMC é de ${imc}\n${nome} nasceu em: ${anoNascimento}`)