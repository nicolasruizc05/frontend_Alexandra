// Definimos una variable para el contador de clicks
let contador = 0
// definimos la funcion para contar los clicks y ejecutar el evento del html
let conteo=() => {
    // contador aumenta en 1 cada vez que se hace click
    contador++
    // mostramos el valor del contador en el html
    document.getElementById("cuenta").textContent=contador
    // Condicion para cambiar el color del boton cuando el contador llegue a 10 
    if (contador >= 10){
        document.getElementById("boton").style.backgroundColor = "red"
    }
}