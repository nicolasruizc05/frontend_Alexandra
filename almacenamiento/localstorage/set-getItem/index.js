// Local storage es una herramienta de javascript que permite guardar una informacion en el navegador, los datos permanecen guardados aunque se actualice la pagina o la cierren
// metodos  -->
// setItem --> crear (clave,valor) 
// getItem --> traer (clave)

let guardar=()=>{
    let name = document.getElementById("nombre").value 
    localStorage.setItem("nombre",name)
}
let ver =()=>{
    let n= localStorage.getItem("nombre")
    alert(n)
}