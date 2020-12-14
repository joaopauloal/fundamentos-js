function esperarPor(tempo = 2000){
  return new Promise(function(resolve){
    setTimeout(function(){
      console.log('Executando promise...')
      resolve()
    }, tempo)
  })
}

async function executar(){
  let valor = await retornarValor()

  await esperarPor(1500)
  console.log(`Async/Await ${valor}...`)

  await esperarPor(1500)
  console.log(`Async/Await ${valor + 1}...`)

  await esperarPor(1500)
  console.log(`Async/Await ${valor + 2}...`)

  return valor + 3
}

async function executarDeVerdade(){
  const valor = await executar()
  console.log(valor)
}

executarDeVerdade()