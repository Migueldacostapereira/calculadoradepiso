function calcular() {
    var orçamento = document.querySelector('#orç')
    var largura = document.querySelector('#lar')
    var comprimento = document.querySelector('#com')
    var piso = document.querySelector('#pis')
    var arga = document.querySelector('#arg')

    var area = (largura.value * comprimento.value) * 1.2
    var argauni = Math.ceil(area / 4)
    var valorpiso = (area * piso.value)
    var valorarga = (area * arga.value)
    var total = (valorarga + valorpiso)

    if (total < orçamento) {
        document.querySelector('#are').innerHTML = area
        document.querySelector('#uni').innerHTML = argauni
        document.querySelector('#respis').innerHTML = valorpiso
        document.querySelector('#resarg').innerHTML = valorarga
        document.querySelector('#total').innerHTML = total
        document.querySelector('#res').innerHTML = "O valor disponível é suficiente para a compra"


    } else {
        document.querySelector('#are').innerHTML = area
        document.querySelector('#uni').innerHTML = argauni
        document.querySelector('#respis').innerHTML = valorpiso
        document.querySelector('#resarg').innerHTML = valorarga
        document.querySelector('#total').innerHTML = total
        document.querySelector('#res').innerHTML = "O valor disponível não é suficiente para a compra, sugestão escolher outro tipo de piso"
    }
}