// se crea el arreglo paises para almacenar los objetos 
let paises=[]
// Se define la funcion de la captura de información
let guardarInfo=()=>{
    //capturamos los datos en una variable correspondiente a cada dato
    let pais = document.getElementById("pais").value  
    let capital=document.getElementById("capital").value
    let continente=document.getElementById("continente").value
    let idioma=document.getElementById("idioma").value
    let bandera=document.getElementById("bandera").value
    // Crea el objeto
    let listaPaises={
        pais:pais,
        capital:capital,
        continente:continente,
        idioma:idioma,
        bandera:bandera
    }
    // Se guarda el objeto en el arreglo en la ultima posicion por la funcion .push
    paises.push(listaPaises)
    localStorage.setItem("paises",JSON.stringify(paises))
    // Limpiamos los datos
    document.getElementById("pais").value=""
    document.getElementById("capital").value=""
    document.getElementById("continente").value=""
    document.getElementById("idioma").value=""
    document.getElementById("bandera").value=""
}

let verInfo=()=>{
    let datos=JSON.parse(localStorage.getItem("paises")||[])
    let contenedor=document.getElementById("contenedor")
    contenedor.innerHTML=""
    for (let i = 0; i < datos.length; i++) {
    let card = document.createElement("div")
        card.style.border="1px solid black"
        card.style.width="200px"
        card.style.height="300px"
        card.style.margin="10px"
        card.style.padding="10px"
        card.style.display="inline-block"
        card.style.textAlign="center"
        card.style.borderRadius="5px"
        // Creamos el elemento de la imagen con su respectivo relacion de aspecto 
        let img = document.createElement("img")
        img.src = datos[i].bandera
        img.style.height="80px"
        img.style.width="180px"
        // Creamos el elemento del titulo 
        let titulo = document.createElement("h2")
        titulo.textContent=datos[i].pais
        // Creamos el elemento de la capital
        let capital = document.createElement("p")
        capital.textContent=datos[i].capital
        // Creamos el elemento del continente
        let continente= document.createElement("p")
        continente.textContent=datos[i].continente
        // Creamos el elemento del idioma
        let idioma= document.createElement("p")
        idioma.textContent=datos[i].idioma
        // Se agregan los elementos al contenedor
        card.appendChild(img)
        card.appendChild(titulo)
        card.appendChild(capital)
        card.appendChild(continente)
        card.appendChild(idioma)
        contenedor.appendChild(card)
}

}