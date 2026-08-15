// definimos la funcion del evento click
let agregarContenido=() => {
    // almacenamos el valor del input en una variable
    let elemento=document.getElementById("contenido").value
    // creamos la etiqueta li
    let li=document.createElement("li")
    // le damos un valor a la etiqueta li
    li.textContent=elemento
    // agregamos la etiqueta li al listado
    listado.appendChild(li)
}
    