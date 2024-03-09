// Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação
// que cada estado teve dentro do valor total mensal da distribuidora.

let faturamento = [67836.43, 36678.66, 29229.88, 27165.48, 19849.53];
let estados = ["SP", "RJ", "MG", "ES", "outros"];

function somarValores(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function calcularPorcentagem(arr, total) {
  let porcentagens = [];
  for (let i = 0; i < arr.length; i++) {
    let percentual = (arr[i] / total) * 100;
    porcentagens.push(percentual.toFixed(2) + "%");
  }
  return porcentagens;
}

function porcentagemFaturamento(estados, faturamento) {
  let faturamentoTotal = somarValores(faturamento);

  let porcentagemRelativa = calcularPorcentagem(faturamento, faturamentoTotal);
  let resultado = [];
  for (let i = 0; i < faturamento.length; i++) {
    resultado.push(`${estados[i]}: ${porcentagemRelativa[i]}`);
  }

  return resultado;
}

console.log(porcentagemFaturamento(estados, faturamento));
