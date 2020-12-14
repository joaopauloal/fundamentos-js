function bomDia(){
  console.log('Bom dia!!!!')
}

const boaTarde = function (){
  console.log('Boa tarde!!')
}

// 1 - Passar uma função como param pra outra função
function executartQualquerCoisa(fn){
  if(typeof fn == 'function'){
    fn()
  }
}

executartQualquerCoisa(3)
executartQualquerCoisa(bomDia)
executartQualquerCoisa(boaTarde)

// 2 - Retornar uma função a partir de uma outra função

function potencia(base, exp){
  return Math.pow(base, exp)
}

const bits8 = potencia(2, 8)
console.log(bits8)