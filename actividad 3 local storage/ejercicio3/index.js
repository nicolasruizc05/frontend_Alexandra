// se define un arreglo vacío para almacenar los animales
let animales =[]
// se define una función para guardar un animal en el arreglo
let guardarAnimal = () => {
    // se obtienen los valores de los campos correspondientes al animal
    let nombre= document.getElementById("nombre").value 
    let especie = document.getElementById("especie").value
    let edad = document.getElementById("edad").value
    let habitat = document.getElementById("habitat").value
    let foto = document.getElementById("foto").value
    // se crea un objeto animal con los valores obtenidos
    let animal ={
        nombre:nombre,
        especie:especie,
        edad:edad,
        habitat:habitat,
        foto:foto
    }
    // se agrega el objeto animal al arreglo de animales
    animales.push(animal)
    // se guardan los animales en localStorage
    localStorage.setItem("animales", JSON.stringify(animales))
    // se limpian los campos 
    document.getElementById("nombre").value = ""
    document.getElementById("especie").value = ""
    document.getElementById("edad").value = ""
    document.getElementById("habitat").value = ""
    document.getElementById("foto").value = ""
}
// se define una función para mostrar los animales guardados en localStorage
let mostrarAnimales = () => {
    // se obtiene el arreglo de animales desde localStorage
    let animalesGuardados = JSON.parse(localStorage.getItem("animales")||[])
    // se crea la tarjeta para cada animal y se agrega al contenedor
    let contenedor = document.getElementById("contenedor")
    // Limpiamos el contenedor
    contenedor.innerHTML=""
    for (let i = 0; i < animalesGuardados.length; i++) {
        // se crea un elemento div para la tarjeta
        let card = document.createElement("div")
        card.style.border = "1px solid black"
        card.style.width = "200px"
        card.style.height = "300px"
        card.style.margin = "10px"
        card.style.padding = "10px"
        card.style.display = "inline-block"
        card.style.textAlign = "center"
        card.style.borderRadius="5px"
        // se crea un elemento img para la foto del animal
        let img = document.createElement("img")
        img.src = animalesGuardados[i].foto
        img.style.height = "80px"
        img.style.width = "180px"
        // se agrega la imagen a la tarjeta
        card.appendChild(img)
        // se crea un elemento h2 para el nombre del animal
        let nombre = document.createElement("h2")
        nombre.textContent = animalesGuardados[i].nombre
        // se crea un elemento p para la especie del animal
        let especie = document.createElement("p")
        especie.textContent = animalesGuardados[i].especie
        // se crea un elemento p para  la edad del animal
        let edad = document.createElement("p")
        edad.textContent=animalesGuardados[i].edad+" "+"Años"
        // se crea un elemento p para el habitat del animal 
        let habitat = document.createElement("p")
        habitat.textContent = animalesGuardados[i].habitat
        // se agregan los datos a la tarjeta 
        card.appendChild(nombre)
        card.appendChild(especie)
        card.appendChild(edad)
        card.appendChild(habitat)
          // se agrega la tarjeta al contenedor
        contenedor.appendChild(card)    
    }
}