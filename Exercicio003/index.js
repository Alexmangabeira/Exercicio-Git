document.getElementById('entradaManha').focus()

let horaDeEntradamanha = document.getElementById('entradaManha')
let horaDeSaidaMeioDia = document.getElementById('saidaManha')

let horaDeEntradatarde = document.getElementById('entradaTarde')
let horaDeSaidaFinalDaTarde = document.getElementById('saidaTarde')

let QtdHorasEx = document.getElementById('QtdHorasEx')

let horaDeTrabalho = 4



function calc() {
    let horaE = 0 
    let horaS = 0
    horaE = ((horaDeSaidaMeioDia.value) - (horaDeEntradamanha.value)) - horaDeTrabalho
    horaS = ((horaDeSaidaFinalDaTarde.value) - (horaDeEntradatarde.value)) - horaDeTrabalho
    QtdHorasEx.innerHTML = `${Number(horaE) + Number(horaS)}`
}




