let letraOriginal = 'A';
let valorAsciiOriginal = letraOriginal.charCodeAt(0); // Obtém o valor ASCII da letra original
let valorAsciiNovo = valorAsciiOriginal + 3; // Adiciona 3 para mudar para a letra "B". 
let novaLetra = String.fromCharCode(valorAsciiNovo); // Converte o novo valor ASCII para o caractere correspondente

console.log(novaLetra); // Saída: 'D'