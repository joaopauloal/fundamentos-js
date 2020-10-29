const carrinho = [
  {nome: 'Caneta', qtd: 10, preco: 7.99},
  {nome: 'Impressora', qtd: 0, preco: 649.50},
  {nome: 'Caderno', qtd: 4, preco: 27.10},
  {nome: 'Lapis', qtd: 3, preco: 5.82},
  {nome: 'Tesoura', qtd: 1, preco: 19.20},
]

const getTotal = item => item.qtd * item.preco
const somar = (acc, el) => acc + el

const totalGeral = carrinho
  .map(getTotal)
  .reduce(somar)

console.log(totalGeral)