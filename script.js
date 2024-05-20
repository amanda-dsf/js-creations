function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >=0 && idade < 13) {
                // Criança
                img.setAttribute('src', 'bebehomem.gif')
            } else if (idade < 30) {
                // Jovem
                img.setAttribute('src', 'jovemhomem.gif')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'adultohomem.gif')
            } else {
                // Idoso
                img.setAttribute('src', 'idosohomem.gif')
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >=0 && idade < 13) {
                // Criança
                img.setAttribute('src', 'bebemulher.gif')
            } else if (idade < 30 ){
                // Jovem
                img.setAttribute('src', 'jovemmulher.gif')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'adultamulher.gif')
            } else {
                // Idoso
                img.setAttribute('src', 'idosamulher.gif')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}