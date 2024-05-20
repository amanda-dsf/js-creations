function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
    // bom dia!
    img.src = 'fotomorning.gif'
    document.body.style.background = '#f8da97'
    } else if (hora >= 12 && hora < 18) {
    // boa tarde!
    img.src = 'fotoafternoon.gif'
    document.body.style.background = '#e7b78c'
    } else {
    // boa noite!
    img.src = 'fotonight.gif'
    document.body.style.background = '#042244'
    }
}
