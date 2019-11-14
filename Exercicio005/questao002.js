let name = 'bola'
let msn = ''

for (let i = name.length; i >= 0;i--) {
  msn += name.charAt(i)
}

console.log(name.split(''))
console.log(name.split('').reverse())
console.log(name.split('').reverse().join(''))
console.log('\nAbaixo verifica se a palavra é palidrome')

console.log(`\nPalavra fornecida: ${name}`)
console.log(`Palavra reversa: ${msn}`)
 if (name === msn){
     console.log(`A palavra ${name} é palidrome`)
 } else {
    console.log(`A palavra ${name} não é palidrome`)
 }