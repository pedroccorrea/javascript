var txtano = window.document.getElementById('txtano')
var nasc = Number(txtano.value)
var data = new Date()
var anoatual = data.getFullYear()
var res = window.document.querySelector('div#res')
function cacular() {
    var idade = anoatual - nasc
    res.innerHTML = `Sua idade é`
}