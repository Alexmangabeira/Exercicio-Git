let nome = 'Alexandro'.toUpperCase()
let msn = ''
let letter = ''

for (let i = 0; i < nome.length;i++) {
    if (nome.charAt(0) === 'A') {
        msn = nome
        letter = nome.charAt(0)
    } else {
        break
    }
}

console.log(`nome: ${msn}
letra: ${letter}`)