import entradaDados from 'readline-sync'


let valor = entradaDados.question("Informe o valor devido: ")
let dia = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ")
let juros;

if (dia >= 15) {
     juros = 10;
}
else{
     juros = 5;
}

let valor_juros = (valor * juros) / 100 + Number(valor);

console.log("Valor original da dívida: R$ "+valor)
console.log("Dias atrasados: "+dia)
console.log("Taxa de Juros: "+juros+"%")
console.log("Valor total com juros: R$ "+valor_juros)


