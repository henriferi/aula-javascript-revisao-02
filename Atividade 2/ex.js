//parte 1
var revendedora = ""
switch (revendedora) {
  case "hatch":
    console.log("Compra efetuada com sucesso!");
    break;
  case "sedan":
    console.log("Tem certeza que não quer esse modelo?");
    break;
  case "motocicleta":
    console.log("Tem certeza que não quer esse modelo?");
    break;
  case "caminhonetes":
    console.log("Tem certeza que não quer esse modelo?");
  default:
    console.log("Não trabalhamos com esse tipo de automóvel aqui.");
}
//parte 2
function triangulos(){
    let a = 5;
    let b = 4;
    let c = 3;
    if(a == c && a == b && b == c){
      console.log("Este triângulo é equilátero!");
      } else if (a != b && a != c && b != c) {
        console.log("Este triângulo é escaleno!");
      } else {
        console.log("Este triângulo é isósceles");
      }
    }
//parte 3 
function numero (valor) {
    if(valor >= 0) {
      console.log("O número é positivo");
    } else {
      console.log("O número é negativo");
    }
  }