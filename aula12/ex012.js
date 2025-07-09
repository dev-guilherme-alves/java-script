var agora = new Date()
var hora = agora.getHours
console.log(`Agora sao extamente ${hora} horas`)
if (hora < 12) {
    console.log('bom dia')
} else if (hora <= 18) {
    console.log('boa tarde')
} else if (hora <= 24) {
    ('boa noite')
} else {
    ('boa madrugada')
}