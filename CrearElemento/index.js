function mostrarInput(){
    let contenedor=document.getElementById("resultado"); //creamos un contenedor para el input
    let cuadroTexto=document.createElement("input") //creamos un elemento tipo input
    cuadroTexto.style.color=("blue")
    cuadroTexto.style.margin="8px"
    cuadroTexto.style.border="3px solid yellow"
    cuadroTexto.style.backgroundColor="lightgray"
    //donde colocarlo.appendChild(que colocar, que elemento colocar)
    contenedor.appendChild(cuadroTexto) //agregamos el input al contenedor
}