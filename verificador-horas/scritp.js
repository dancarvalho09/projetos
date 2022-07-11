
function carregar() {
     let msg = window.document.getElementById('msg')
     let img = window.document.getElementById('imagem')

     let date = new Date()

     let new_date = new Date()
     new_date.setDate(date.getDate())

     let hora = date.getHours()
     let minutos = new_date.getMinutes()

   

    /* PARA TESTAR OUTROS HORÁRIOS
    let hora = 20
    let minutos = 15
    */
    
   if (hora >= 0 && hora < 12) {
        img.src = 'foto-manha.jpg' //bom dia
        document.body.style.backgroundColor = 'dodgerblue'
        msg.innerHTML = `Bom dia! Agora são ${hora}:${minutos}h.`
         
   } else if (hora >= 12 && hora <= 18) {
        img.src = 'foto-tarde.jpg' //boa tarde
        document.body.style.backgroundColor = 'darkorange'
        msg.innerHTML = `Boa tarde! Agora são ${hora}:${minutos}h.`

   } else {
       img.src = 'foto-noite.jpg' //boa noite
       document.body.style.backgroundColor = 'darkslategrey'
       msg.innerHTML = `Boa noite! Agora são ${hora}:${minutos}h.`
   }


}