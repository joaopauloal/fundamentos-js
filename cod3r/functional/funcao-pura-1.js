const PI = 3.14

//impura - PI é um valor externo!
function areaCirc(raio){
  return raio * raio * PI
}

//pura não depende de variaveis externas
function areaCircPura(raio, pi){
  return raio * raio * pi
}

console.log(areaCirc(10))
console.log(areaCircPura(10, 3.14))