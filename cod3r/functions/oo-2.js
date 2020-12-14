class Produto {
  constructor(nome, preco, desc){
    this._nome = nome
    this.preco = preco
    this.desc = desc
  }

  get nome(){
    return `Produto: ${this._nome}`
  }

  set nome(novoNome){
    this._nome = novoNome.toUpperCase()
  }

  get precoFinal(){
    return this.preco * (1 - this.desc)
  }
}

const p1 = new Produto('Caneta', 10)
p1.nome = 'caneta'
console.log(p1.nome)

const p2 = new Produto('Geladeira', 3000, 0.3)
console.log(p2.preco)
console.log(p2.precoFinal)