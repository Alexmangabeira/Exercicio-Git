let nome = 'a e i o u'.replace(' ','')
console.log(nome)
let contNome = nome.length
let n = nome.replace(/[a,e,i,o,u]/g,'')
let contVogais = n.length

console.log(contNome)
console.log(contVogais)
console.log(`Qtd vogais = ${contNome - contVogais}`)