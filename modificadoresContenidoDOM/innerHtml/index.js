// innerHTML permite modificcar texto de un elemento HTML, 

let leerTexto=() => {
    let parrafo= document.getElementById("parrafo")
    let texto= parrafo.innerHTML
    console.log(`el texto es: ${texto}`)
}

let cambiarTitulo=()=>{
    let titulo =document.getElementById("titulo")
    titulo.innerHTML="Titulo InnerHTML"
}

let cambiarParrafo=()=>{
    let parrafo = document.getElementById("parrafo")
    parrafo.innerHTML="Parrafo InnerHTML"
}

let mostrarHTML=()=>{
    let contenedor = document.getElementById("contenedor")
    contenedor.innerHTML="<h3> Esto es una prueba de codigo html</h3>"
}