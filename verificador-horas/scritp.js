
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

   var date = new Date()
    var hora = date.getHours()
    var minutos = date.getMinutes()

    /*var hora = 20
    var minutos = 15*/
    
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