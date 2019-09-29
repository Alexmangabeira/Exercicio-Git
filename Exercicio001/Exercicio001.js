// Números em ordem crescente
//https://github.com/Alexmangabeira/Exercicio.git
function compare(a, b) {
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }
    return 0
}

function compareNumbers(a, b) {
    return a - b
}

var vetor = [89,0,36,5,2,65,1,45,7]
vetor.sort(function(a, b){
    return a - b
})

console.log(vetor)