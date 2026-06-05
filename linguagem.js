function linguagemDosGatosECachorros(animal) {
  // mostrar que entrou na função:
  console.log("Estudando Git e GitHub");

  if (animal == "cachorro") return "au au";
  else if (animal == "gato") return "miau";
  else if (animal == "vaca") return "muu";
  else return "Informe gato ou cachorro ou vaca";
}
// aqui vamos imprimir o resultado dasa 3 chamadas:
console.log(linguagemDosGatosECachorros("cachorro"));
console.log(linguagemDosGatosECachorros("gato"));
console.log(linguagemDosGatosECachorros());
