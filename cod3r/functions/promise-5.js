function funcionarOuNaon(valor, chanceErro){
  return new Promise((resolve, reject) => {
    if(Math.random() < chanceErro){
      reject('Ocorreu um erro!')
    }else{
      resolve(valor)
    }
  })
}

funcionarOuNaon('Testando...', 0.5)
  .then(valor => console.log(`Valor: ${valor}`))
  .then(valor => console.log(valor))
  .catch(err => console.log(`Erro: ${err}`))
  .then(() => console.log('Fim'))