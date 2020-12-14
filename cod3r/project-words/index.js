const path = require('path')
const fn = require('./utils')

const caminho = path.join(__dirname, 'legendas')

const simbolos = [
  '.', '?','-',',', '"', '♪',
  '_','<i>','</i>','\r','[',']',
  '(',')'
]

fn.lerDiretorio(caminho)
  .then(fn.elementosTerminadosCom('.srt'))
  .then(fn.lerArquivos)
  .then(fn.mesclarElementos)
  .then(fn.separarTextoPor('\n'))
  .then(fn.removerSeVazio)
  .then(fn.removerSeIncluir('-->'))
  .then(fn.removerSeApenasNumeros)
  .then(fn.removerSimbolos(simbolos))
  .then(fn.mesclarElementos)
  .then(fn.separarTextoPor(' '))
  .then(fn.removerSeVazio)
  .then(fn.removerSeApenasNumeros)
  .then(fn.agruparElementos)
  .then(fn.ordernarPorAtribNumerico('qtde', 'desc'))
  .then(console.log)