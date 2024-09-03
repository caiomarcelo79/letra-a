// Palavra que será filtrada
const palavra = 'capa'

// Conversão da palavra em letra minúscula
const palavraLower = palavra.toLowerCase()

// Palavra convertido em um array
const palavraArray = palavraLower.split('')

// Faz o filtro de cada array com a letra 'a'
const palavraFiltrada = palavraArray.filter(letra => letra.includes('a'))


// Verifica o tamanho do array palavraFiltrada e toma a decisão com base nessa informação
if (palavraFiltrada.length == 1) {
  console.log(`A letra "a" aparece ${palavraFiltrada.length} vez na palavra ${palavraLower}`)
} 
if (palavraFiltrada.length > 1) {
  console.log(`A letra "a" aparece ${palavraFiltrada.length} vezes na palavra ${palavraLower}`)
}
if (palavraFiltrada.length == 0) {
  console.log(`Na palavra ${palavraLower} nao tem nenhuma letra "a"`)
}
