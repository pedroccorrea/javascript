var idade = 60
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota.')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto opcional')
}

/*var idade = 17
if (idade < 16) {
    console.log('Não vota.')
} else {
    if (idade >=16 && idade < 18){
        console.log('Pode voltar (opcional).')
    } else{
        console.log('Voto obrigatório!')
    }
}*/