let input = `9
Maria Jose
branco P
Mangojata Mancuda
vermelho P
Cezar Torres Mo
branco P
Baka Lhau
vermelho P
JuJu Mentina
branco M
Amaro Dinha
vermelho P
Adabi Finho
branco G
Severina Rigudinha
branco G
Carlos Chade Losna
vermelho P
3
Maria Joao
branco P
Marcio Guess
vermelho P
Maria Jose
branco P
0`;
let lines = input.split('\n');

let numberShirts = parseInt(lines.shift());
let lastShirts = numberShirts;

while (numberShirts !== 0) {
  let camisas = [];

  for (let i = 0; i < numberShirts; i++) {
    let name = lines.shift();
    let description = lines.shift().split(" ");
    let cor = description.shift();
    let tamanho = description.shift();

    camisas.push({ nome: name, cor: cor, tamanho: tamanho });
  }

  camisas.sort(function (a, b) {
    if (a.cor !== b.cor) {
      return a.cor.localeCompare(b.cor);
    } else if (a.tamanho !== b.tamanho) {
      return b.tamanho.localeCompare(a.tamanho);
    } else {
      return a.nome.localeCompare(b.nome);
    }
  });

  if (lastShirts !== numberShirts) {
    console.log();
  }

  for (let i = 0; i < numberShirts; i++) {
    let cor = camisas[i].cor;
    let tamanho = camisas[i].tamanho;
    let nome = camisas[i].nome;

    console.log(cor + " " + tamanho + " " + nome);
  }

  lastShirts = numberShirts;
  numberShirts = parseInt(lines.shift());
}
