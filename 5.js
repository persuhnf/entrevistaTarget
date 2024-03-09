// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

//CASO OUTROS MÉTODOS POSSAM SER UTILIZADOS
function fraseAoContrario1(frase) {
  let fraseAoContrario = [];
  for (let i = frase.length - 1; i >= 0; i--) {
    fraseAoContrario.push(frase[i]);
  }
  return fraseAoContrario.join("");
}

//SEM NENHUM MÉTODO
function fraseAoContrario2(frase) {
  let fraseAoContrario = "";
  for (let i = frase.length - 1; i >= 0; i--) {
    fraseAoContrario += frase[i];
  }
  return fraseAoContrario;
}
