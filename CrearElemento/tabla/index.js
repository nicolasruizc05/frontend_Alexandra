let agregar = () => {
    let contenedor = document.getElementById("contenedor")
    let tabla = document.createElement("table")
    tabla.style.border = "2px solid red"
    tabla.style.borderCollapse = "collapse"
    let fila1 = document.createElement("tr")
    let celda1 = document.createElement("td")
    celda1.style.border = "1px solid red"
    celda1.textContent = "celda 1 de la fila 1"
    let celda2 = document.createElement("td")
    celda2.style.border = "1px solid red"
    celda2.textContent = "celda 2 de la fila 1"
    let celda3 = document.createElement("td")
    celda3.style.border = "1px solid red"
    celda3.textContent = "celda 3 de la fila 1"
    let celda4 = document.createElement("td")
    celda4.style.border = "1px solid red"
    celda4.textContent = "celda 4 de la fila 1"
    let celda5 = document.createElement("td")
    celda5.style.border = "1px solid red"
    celda5.textContent = "celda 5 de la fila 1"
    let fila2 = document.createElement("tr")
    let celda6 = document.createElement("td")
    celda6.style.border = "1px solid red"
    celda6.textContent = "celda 1 de la fila 2"
    let celda7 = document.createElement("td")
    celda7.style.border = "1px solid red"
    celda7.textContent = "celda 2 de la fila 2"
    let celda8 = document.createElement("td")
    celda8.style.border = "1px solid red"
    celda8.textContent = "celda 3 de la fila 2"
    let celda9 = document.createElement("td")
    celda9.style.border = "1px solid red"
    celda9.textContent = "celda 4 de la fila 2"
    let celda10 = document.createElement("td")
    celda10.style.border = "1px solid red"
    celda10.textContent = "celda 5 de la fila 2"
    let fila3 = document.createElement("tr")
    let celda11 = document.createElement("td")
    celda11.style.border = "1px solid red"
    celda11.textContent = "celda 1 de la fila 3"
    let celda12 = document.createElement("td")
    celda12.style.border = "1px solid red"
    celda12.textContent = "celda 2 de la fila 3"
    let celda13 = document.createElement("td")
    celda13.style.border = "1px solid red"
    celda13.textContent = "celda 3 de la fila 3"
    let celda14 = document.createElement("td")
    celda14.style.border = "1px solid red"
    celda14.textContent = "celda 4 de la fila 3"
    let celda15 = document.createElement("td")
    celda15.style.border = "1px solid red"
    celda15.textContent = "celda 5 de la fila 3"
    let fila4 = document.createElement("tr")
    let celda16 = document.createElement("td")
    celda16.style.border = "1px solid red"
    celda16.textContent = "celda 1 de la fila 4"
    let celda17 = document.createElement("td")
    celda17.style.border = "1px solid red"
    celda17.textContent = "celda 2 de la fila 4"
    let celda18 = document.createElement("td")
    celda18.style.border = "1px solid red"
    celda18.textContent = "celda 3 de la fila 4"
    let celda19 = document.createElement("td")
    celda19.style.border = "1px solid red"
    celda19.textContent = "celda 4 de la fila 4"
    let celda20 = document.createElement("td")
    celda20.style.border = "1px solid red"
    celda20.textContent = "celda 5 de la fila 4"
    let fila5 = document.createElement("tr")
    let celda21 = document.createElement("td")
    celda21.style.border = "1px solid red"
    celda21.textContent = "celda 1 de la fila 5"
    let celda22 = document.createElement("td")
    celda22.style.border = "1px solid red"
    celda22.textContent = "celda 2 de la fila 5"
    let celda23 = document.createElement("td")
    celda23.style.border = "1px solid red"
    celda23.textContent = "celda 3 de la fila 5"
    let celda24 = document.createElement("td")
    celda24.style.border = "1px solid red"
    celda24.textContent = "celda 4 de la fila 5"
    let celda25 = document.createElement("td")
    celda25.style.border = "1px solid red"
    celda25.textContent = "celda 5 de la fila 5"
    fila1.appendChild(celda1)
    fila1.appendChild(celda2)
    fila1.appendChild(celda3)
    fila1.appendChild(celda4)
    fila1.appendChild(celda5)
    fila2.appendChild(celda6)
    fila2.appendChild(celda7)
    fila2.appendChild(celda8)
    fila2.appendChild(celda9)
    fila2.appendChild(celda10)
    fila3.appendChild(celda11)
    fila3.appendChild(celda12)
    fila3.appendChild(celda13)
    fila3.appendChild(celda14)
    fila3.appendChild(celda15)
    fila4.appendChild(celda16)
    fila4.appendChild(celda17)
    fila4.appendChild(celda18)
    fila4.appendChild(celda19)
    fila4.appendChild(celda20)
    fila5.appendChild(celda21)
    fila5.appendChild(celda22)
    fila5.appendChild(celda23)
    fila5.appendChild(celda24)
    fila5.appendChild(celda25)
    tabla.appendChild(fila1)
    tabla.appendChild(fila2)
    tabla.appendChild(fila3)
    tabla.appendChild(fila4)
    tabla.appendChild(fila5)
    contenedor.appendChild(tabla)
}

let agregarInner = () => {
    let tabla = document.getElementById("contenedor")
    tabla.style.border="1px solid green"
    tabla.innerHTML ="<table><tr><td>1</td><td>2</td><td>3</td><td>4</td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></table>"
    tabla.style.borderCollapse="collapse"
    tabla.tr.style.border="1px solid green"
}