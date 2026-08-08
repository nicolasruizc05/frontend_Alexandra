// Definir una variable para contar los clics
let contador =0
// Definir funcion para el evento de atrapar el boton
let atraparBoton=()=>{
// Incrementar el contador
    contador++
// Actualizar el contenido del contador de aciertos de clic
    document.getElementById("aciertos").textContent=contador
// Cambiar la posición del boton a una posición aleatoria
    let movimiento= document.getElementById("boton")
// Cambiar la posición del boton a una posición aleatoria
    movimiento.style.position="absolute"
// Generar posiciones aleatorias dentro de los límites del contenedor
    let x= Math.random()* 500
    let y= Math.random()* 300
// Asignar las posiciones aleatorias al boton
    movimiento.style.left=`${x}px`
    movimiento.style.top=`${y}px`
}