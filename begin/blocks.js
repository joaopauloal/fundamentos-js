function NumerosPares(){
  for(var i = 1; i<=10; i++)
    i % 2 == 0 && console.log(i)  
}

function NumerosImpares(){
  for(var i = 1; i<=10; i++)
    i % 2 !== 0 && console.log(i)  
}

NumerosPares();
console.log("-------")
NumerosImpares();