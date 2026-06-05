function linguagemDosGatosECachorros(animal) {
  // será executado antes do return.
  console.log("Estudando Git e GitHub");

  if (animal == "cachorro") return "au au";
  else if (animal == "gato") return "miau";
  else if (animal == "vaca") return "muu";
  else return "Informe gato ou cachorro ou vaca";
}

// Chamamos a função e mandamos imprimir o resultado para:
console.log(linguagemDosGatosECachorros("cachorro"));
console.log(linguagemDosGatosECachorros("gato"));
console.log(linguagemDosGatosECachorros());
