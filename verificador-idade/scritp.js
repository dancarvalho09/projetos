
function verificar(){

    var data = new Date()
    var ano_atual = data.getFullYear()
    var resultado = window.document.querySelector('div#resultado')
    var form_ano = window.document.querySelector('input#txtano')
    var form_sexo = window.document.getElementsByName('radsexo')
    var idade = ano_atual - Number(form_ano.value)
    var genero = ''
    var img = window.document.getElementById('imagem')


    if (form_ano.value.length == 0 || form_ano.value > ano_atual) {
        window.alert('Dados incorretos. Tente novamente!')
    }  

    if (form_sexo[0].checked) {
        genero = 'Homem'
        
        

        if(idade >=0 && idade < 5) {
            img.src = 'imagens/baby-masc.jpg'
            img.style.backgroundColor = 'dodgerblue'
        } else if (idade <= 13) {
            img.src = 'imagens/crianca-masc.jpg'
        } else if (idade <= 25) {
            img.src = 'imagens/jovem-masc.jpg'
        } else if (idade < 60) {
            img.src = 'imagens/adulto-masc.jpg'
        } else {
            img.src = 'imagens/idoso-masc.jpg'
        }

    }



    resultado.innerHTML = `Sua idade é ${idade} anos.`
}