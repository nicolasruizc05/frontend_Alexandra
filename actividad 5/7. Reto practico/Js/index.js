// Encontrar un elemento especifico 
let titulo = document.getElementById("titulo-principal")
console.log(titulo)

//Encontrar varios elementos 
let elementos = document.querySelectorAll(".categoria")
console.log(elementos)

//Encontrar elementos por clase
let clases = document.getElementsByClassName("juego-titulo")
console.log(clases)

// Encontrar elementos por etiqueta
let etiqueta = document.getElementsByTagName("button")
console.log(etiqueta)
let etiq = document.querySelectorAll("button")
console.log(etiq)

// Realizar una selección mas especifica utilizando selectores
let categorias = document.querySelectorAll(".categoria");

for (let categoria of categorias) {
  let ofertasEnCategoria = categoria.querySelectorAll(".juego.oferta");
  console.log(categoria.querySelector(".titulo-categoria"), ofertasEnCategoria)
}