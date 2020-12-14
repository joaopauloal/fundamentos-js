//arrow functioon
const felizNatal = () => console.log('Feliz Natal!!!')
felizNatal()

const saudacao = nome => `Seja bem vindo(a) ${nome}, blz?`
console.log(saudacao('JP'))

const somar = (...numeros) => {
  let total = 0
  for(let n of numeros){
    total += n
  }
  return total
}

console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

const potencia = base => exp => Math.pow(base, exp)

console.log(potencia(2)(10))

//this

const numeros = [1, 2, 3]
numeros.log()