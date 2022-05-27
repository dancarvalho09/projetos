
function verificar(){

    var data = new Date()
    var ano_atual = data.getFullYear()
    var resultado = window.document.querySelector('div#resultado')
    var form_ano = window.document.querySelector('input#txtano')
    var form_sexo = window.document.getElementsByName('radsexo')
    var idade = ano_atual - Number(form_ano.value)
    var genero = ''
    var img = window.document.getElementById('imagem')
    var section = window.document.getElementById('section')
    


    if (form_ano.value.length == 0 || form_ano.value > ano_atual) {
        window.alert('Dados incorretos. Tente novamente!')
    }  

    if (form_sexo[0].checked) {
        genero = 'Homem'
        

        if(idade >=0 && idade < 5) {
            img.src = 'imagens/baby-masc.jpg'
            section.style.backgroundColor = '#cbe8ef'
        } else if (idade <= 13) {
            img.src = 'imagens/crianca-masc.jpg'
            section.style.backgroundColor = '#cbe8ef'
        } else if (idade <= 25) {
            img.src = 'imagens/jovem-masc.jpg'
            section.style.backgroundColor = '#cbe8ef'
        } else if (idade < 60) {
            img.src = 'imagens/adulto-masc.jpg'
            section.style.backgroundColor = '#cbe8ef'
        } else {
            img.src = 'imagens/idoso-masc.jpg'
            section.style.backgroundColor = '#cbe8ef'
        }
        
    } else {
        genero = 'Mulher'

        if(idade >=0 && idade < 5) {
            img.src = 'imagens/baby-fem.jpg'
            section.style.backgroundColor = '#ffd6f9'
        } else if (idade <= 13) {
            img.src = 'imagens/crianca-fem.jpg'
            section.style.backgroundColor = '#ffd6f9'
        } else if (idade <= 25) {
            img.src = 'imagens/jovem-fem.jpg'
            section.style.backgroundColor = '#ffd6f9'
        } else if (idade < 60) {
            img.src = 'imagens/adulto-fem.jpg'
            section.style.backgroundColor = '#ffd6f9'
        } else {
            img.src = 'imagens/idoso-fem.jpg'
            section.style.backgroundColor = '#ffd6f9'
        }  
    }

    resultado.innerHTML = `<strong>${genero} com ${idade} anos.</strong>`
}