function imc(){

    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let resultado = document.getElementById('resultado')

    if(nome != '' && altura != '' && peso != ''){
        let valorImc = (peso / (altura * altura)).toFixed(1)

        if(valorImc < 18.5) {
            tipoImc = "Abaixo do peso"
        } else if(valorImc > 18.6 && valorImc < 24.9){
            tipoImc = "Peso ideal"
        } else if(valorImc > 25 && valorImc < 29.90){
            tipoImc = "Levemente acima do peso"
        } else if(valorImc > 30 && valorImc < 34.9){
            tipoImc = "Obesidade Grau 1"
        } else if (valorImc > 35.0 && valorImc < 39.9){
            tipoImc = "Obesidade Grau 2"
        } else {
            tipoImc = "Obesidade Mórbida"
        }

        resultado.innerHTML = "Òla " +nome+ " seu IMC é " +valorImc+ " e você está com " +tipoImc


        } else {
        resultado.innerHTML = 'Por favor preencha todos os campos.'
    }


}