
function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
  
    msg.innerHTML = `Agora são ${hora} horas!`
    if(hora >0 && hora < 13){
        img.src = 'fotos12/fotomanha.png'
    }
    else if(hora > 13 && hora < 18){
        img.src = 'fotos12/fototarde.png'
    }
    else{
        img.src = 'fotos12/fotonoite.png'
    }



}
