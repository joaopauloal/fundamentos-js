const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho){
  return new Promise((resolve, reject) => {
    try{
      let arquivos = fs.readdirSync(caminho)
      arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
      resolve(arquivos)
    }catch (err){
      reject(err)
    }
  })
}

function lerArquivo(caminho){
  return new Promise((resolve, reject) => {
    try{
      const conteudo = fs. readFileSync(caminho, { encoding: 'utf-8'})
      resolve(conteudo.toString())
    }catch(err){
      reject(err)
    }
  })
}

function lerArquivos(caminhos){
  return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function elementosTerminadosCom(padraoTextual){
  return function(array){
    return array.filter(el => el.endsWith(padraoTextual))
  } 
}

function removerSeVazio(array){
  return array.filter(el => !!el.trim())
}

function removerSeIncluir(padraoTextual){
  return function(array){
    return array.filter(el => !el.includes(padraoTextual))
  }
}

function removerSeApenasNumeros(array){
  return array.filter(el => {
    const num = parseInt(el.trim())
    return num !== num
  })
}

module.exports = {
  lerDiretorio,
  lerArquivo,
  lerArquivos,
  elementosTerminadosCom,
  removerSeVazio,
  removerSeIncluir,
  removerSeApenasNumeros
}