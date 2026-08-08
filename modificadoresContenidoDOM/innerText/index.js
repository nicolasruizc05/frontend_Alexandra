// innerTEXT me permite cambiar texto 
let agregar=()=>{
    let titulo=document.getElementById("titulo")
    titulo.innerText="Titulo innerText"
}
let agregarHTML=()=>{
    let titulo2=document.getElementById("titulo")
    titulo2.innerText="<strong>Mensaje innerHTML</strong>"
}
let leer=()=>{
    let titulo2=document.getElementById("titulo")
    alert(titulo2.innerText)
}