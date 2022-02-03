var txtano = window.document.getElementById('txtano')
var nasc = Number(txtano.value)
var data = new Date()
var anoatual = data.getFullYear()
var res = window.document.getElementById('res')
function verificar() {
    var anodenascimento = Number(txtano.value)
    
    var sex = window.document.getElementsByName('radsex')
    if (txtano.value.length == 0 || txtano.value > anoatual){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoatual - anodenascimento
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
        } else {
            genero = 'Mulher'
        }
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        if (genero == 'Homem'){
            if (idade < 12){
                res.innerHTML += `<img src="imagens/mcrianca.png" alt="Homem Criança">`
            } else if (idade < 21) {
                res.innerHTML += `<img src="imagens/madolecente.png" alt="Homem Adolecente">`
            } else if (idade < 60) {
                res.innerHTML += `<img src="imagens/madulto.png" alt="Homem Adulto">`
            } else {
                res.innerHTML += `<img src="imagens/midoso.png" alt="Homem Idoso">`
            }

        } else if(genero == 'Mulher') {
            if (idade < 12){
                res.innerHTML += `<img src="imagens/fcrianca.png" alt="Mulher Criança">`
            } else if (idade < 18) {
                res.innerHTML += `<img src="imagens/fadolecente.png" alt="Mulher Adolecente">`
            } else if (idade < 60) {
                res.innerHTML += `<img src="imagens/fadulta.png" alt="Mulher Adolecente">`
            } else {
                res.innerHTML += `<img src="imagens/fidosa.png" alt="Mulher Idoso">`
            }
        }
    }

}


