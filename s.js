
function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours() 
    msg.innerHTML = `agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12) {
        document.body.style.background = "#acddfd"
        img.src = "img/manha.png"
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = "#ffba71"
        img.src = "img/foto-tarde.png"
    } else {
        document.body.style.background = "#3a6166"
        img.src = "img/noite.png"
    }
}