
var hora = window.document.getElementById('hora')
var agora = new Date()
var hagora = agora.getHours()
var imagem = window.document.getElementById('imagem')
hora.innerHTML = `Agora são ${hagora} horas.`

if (hagora >= 4 && hora < 12) {
    imagem.innerHTML = '<img src="amanhecer.png" alt="amanhecer">'
    document.body.style.backgroundColor = '#dddd89'
} else if (hagora < 18) {
    imagem.innerHTML = '<img src="tarde.png" alt="tarde">'
    document.body.style.backgroundColor = '#6cb3d4'
} else {
    imagem.innerHTML = '<img src="noite.png" alt="noite">'
    document.body.style.backgroundColor = '#383737'
}
