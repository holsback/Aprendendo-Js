console.log('Teste....')

//Para
var i;
for(i = 1; i <= 10; i ++){
    console.log(i);
}


//Escolha caso
var diaDaSemana = 4;
switch (diaDaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Terça-feira");
        break;
    case 7:
        console.log("Sábado-feira");
        break;
    default:
        console.log("Esse dia não é válido")
}


//se e senao
var name = "Bruno"
var idade = 14
if(idade <= 18) {
    console.log(name + " Menor de idade");
}else{
    console.log(name + " Maior de idade")
}

//Enquanto
num = 0;
while (num <= 10) {
    console.log(num);
    num++;
}

//Faça enquanto
var numero = 0;
do {
    numero ++
    console.log(numero)
} while (numero < 10) 
