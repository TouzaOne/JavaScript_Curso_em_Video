function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formano.ariaValueMax.length == 0 || formano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        alert('Tudo Ok.')
    }
}