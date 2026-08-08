// textContent permite leer o modificar el contenido del texto dentro de un html.
function cambiarTitulo(){
    let titulo = document.getElementById("titulo")
    titulo.textContent="Nuevo titulo Text Content"
}
// Funcion tipo flecha =>

    let cambiarTitulo2=()=>{
        let titulo = document.getElementById("titulo")
        titulo.textContent="Nuevo titulo Text Content 2"
    }