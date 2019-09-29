// Maior e Menor
//var vetor = new Array(5)
var vetor = [89,5,45,1,9,55]
var maior = 0, menor = 0
var r = ''

for (var i = 0; i < vetor.length; i++) {
    //vetor[i] = Number(window.prompt(`Digite ${vetor.length -i}º Números`))

    if (i == 0){
        maior = vetor[i]
        menor = vetor[i]
    }else{
        if (vetor[i] > maior){
            maior = vetor[i]
        }
        if (vetor[i] < menor){
            menor = vetor[i]
        }
    }

    r += vetor[i] + ' '
}

console.log(`Nº digitados: ${r}`)
console.log(`Maior: ${maior}`)
console.log(`Menor: ${menor}`)