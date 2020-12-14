let now = new Date
const hora = now.getHours();

const saudacao = hora <= 12 ? 'Bom dia' : hora <= 17 ? 'Boa tarde' : 'Boa noite';
console.log(saudacao)