function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formano.value.length == 0 || Number(formano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
                img.style.borderRadius = '50%'
                img.style.paddingTop = '10px'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
                img.style.borderRadius = '50%'
                img.style.paddingTop = '10px'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
                img.style.borderRadius = '50%'
                img.style.paddingTop = '10px'
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
                img.style.borderRadius = '50%'
                img.style.paddingTop = '10px'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
                img.style.borderRadius = '50%'
                img.style.paddingTop = '15px'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
                img.style.borderRadius = '50%'
                img.style.paddingTop = '10px'
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'imagens/foto-adulta-f.png')
                img.style.borderRadius = '50%'
                img.style.paddingTop = '10px'
            } else {
                // Idosa
                img.setAttribute('src', 'imagens/foto-idosa-f.png')
                img.style.borderRadius = '50%'
                img.style.paddingTop = '10px'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}