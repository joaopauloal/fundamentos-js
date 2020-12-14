// Function declaration

function sayHello(){
  console.log('Hello!');
}

function sayHelloTo(name){
  console.log(`Hello ${name}` )
}

sayHelloTo('JP');
sayHello();

function returnHi(){
  return 'Hi'
}

const greeting = returnHi()
console.log(greeting)
console.log(returnHi())
