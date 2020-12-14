class Cliente{
  nome;
  cpf;  
}

class ContaCorrente{
  agencia;
  saldo;

  sacar(valor){
    if(this.saldo >= valor){
      this.saldo -= valor;    
    }else{
      console.log("Saldo insuficiente");
      return;
    }
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Chico 10";
cliente1.cpf= 33344455566;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 44488855566;

const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.saldo = 100;
contaCorrenteCliente1.agencia = 1001;

console.log(`Saldo após inicial: ${contaCorrenteCliente1.saldo}`);
contaCorrenteCliente1.sacar(1000);
console.log(`Saldo após o saque: ${contaCorrenteCliente1.saldo}`);