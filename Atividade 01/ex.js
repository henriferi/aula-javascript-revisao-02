//parte 1
_numero = 0;
if (_numero < 0) {
    console.log(`O valor ${_numero} é um número negativo.`);
} else {
    console.log(`O valor ${_numero} é um número positivo.`);
}
//parte 2
function validacao (valorA,valorB,valorC) {
    let soma = valorA + valorC;
    if (soma > valorB) {
        console.log(valorA,valorC,soma);
  } else {
        console.log(soma = valorB);
  }
}
//parte 3
function horario (){
    let hora = 8;
    if(hora >= 4 && hora < 12) {
      console.log(`Bom Dia!`);
    } else if (hora >= 12 && hora < 18) {
      console.log(`Boa Tarde!`);
    } else if (hora >=18 && hora < 23.59) {
      console.log(`Boa Noite!`);
    } else {
      console.log(`Valor Inválido!`);
    }
  }