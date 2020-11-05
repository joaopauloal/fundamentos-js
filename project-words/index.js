const path = require('path')
const fn = require('./utils')

const caminho = path.join(__dirname, 'legendas')

fn.lerDiretorio(caminho)
  .then(fn.elementosTerminadosCom('.srt'))
  .then(fn.lerArquivos)
  .then(conteudos => conteudos.join('\n'))
  .then(todoConteudo => todoConteudo.split('\n'))
  .then(fn.removerSeVazio)
  .then(fn.removerSeIncluir('-->'))
  .then(fn.removerSeApenasNumeros)
  .then(console.log)