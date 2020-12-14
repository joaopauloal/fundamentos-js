let temDinheiro = true;
let estaensolarado = true;
let carroEstaNaGaragem = false;

let resultadoE = '#1 (AND) - Vai pro shopping? ';
resultadoE += temDinheiro && estaensolarado;
console.log(resultadoE);

let resultadoOU = '#2 (OR) - Vai pro shopping? ';
resultadoOU += estaensolarado || carroEstaNaGaragem;
console.log(resultadoOU);