let nome = 'Alexandro Lima Mangabeira'.toUpperCase()
cont = 0
for (let i =0; i < nome.length;i++){
    if (nome.charAt(i) === 'A'){
        cont++
    }
}
console.log(`Nome Fornecido: ${nome}`)
console.log(`Qtd letras (A): ${cont}`)