// No permite leer el contenido de los elementos ocultos, solo el contenido visible = display: none
let innerT=()=>{
let textoV= document.getElementById("textoV")
let textoO= document.getElementById("textoO")
let contenedor= document.getElementById("contenedor")
alert(textoV.innerText)
alert(contenedor.innerText)
console.log(textoO.innerText)
}
// Permite leer el contenido de los elementos ocultos, lee todo el contenido del elemento, aunque no sea visible
let textC=()=>{
let textoV= document.getElementById("textoV")
let textoO= document.getElementById("textoO")
let contenedor= document.getElementById("contenedor")
alert(textoV.textContent)
alert(contenedor.textContent)
console.log(textoO.textContent)
}