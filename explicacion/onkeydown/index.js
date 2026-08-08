function capturartecla(){
    let campoprofesion = document.getElementById("profesion")
    let contenido = campoprofesion.value 
    document.getElementById("resultado").textContent=contenido
    console.log(`Contenido capturado: ${contenido}`)
}