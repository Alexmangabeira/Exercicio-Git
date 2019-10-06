// Maior e Menor
document.querySelector('input#num').focus()
let num = document.querySelector('input#num')
let listas = document.querySelector('select#lista')
let resultado = document.querySelector('div#resultado')
let valores = []


// Verificando se são números
let isnumero = (n) => {
    if (Number(n) > 0 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

// Verificando se contem os números dentro da lista
let inlista = (numeros, lista) => {
    if (lista.indexOf(Number(numeros)) != -1) {
        return true
    }else{
        return false
    }
}

// Função adicionar na lista
let item
let add = () => {
    if (isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        item = document.createElement('option')
        item.text = `valor adicionado ${num.value}`
        listas.appendChild(item)
        resultado.innerHTML = ''
    }else{
        alert(`Valor invalido ou contem na lista`)
    }
    num.value = ''
    num.focus()
}

// Função analizar
let analizar = () => {
    if (valores.length < 0){
        alert('Digite os valores')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma  = 0
        let media = 0

        for (let posicao in valores){
            soma += valores[posicao]
            if (valores[posicao] > maior) {
                maior = valores[posicao]
            }if (valores[posicao] < menor) {
                menor = valores[posicao]
            }
        }
        media = (soma / total)
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Total dos Nº digitados: ${total}</p>`
        resultado.innerHTML += `<p>Maior: ${maior}.</p>`
        resultado.innerHTML += `<p>Menor: ${menor}</p>`
        resultado.innerHTML += `<p>Soma: ${soma}</p>`
        resultado.innerHTML += `<p>Média: ${media.toFixed(2)}</p>`
    }
    num.value = ''
    num.focus()
}

// Função Para limpar os campos
let limpar = () => {
    resultado.innerHTML = ''
    num.focus()
    valores = []
    for (let pos in listas){
        if (listas.length > 0){
            listas.remove(valores[pos])
        }
    }
}




