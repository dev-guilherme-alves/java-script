function carregar() {
var msg = window.document.getElementById('msg')
var msg = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora sao ${hora}`
if (hora >= 0 && hora < 12) {
    // bom dia
    img.src = 'fotomanha.png'
    document.body.style.background = '#fff781'
} else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = 'fototarde.webp'
    document.body.style.background = '#ffe07c'
} else {
    //boa noite
    img.src = 'fotonoite.png'
    document.body.style.background = '#161691'
}
}