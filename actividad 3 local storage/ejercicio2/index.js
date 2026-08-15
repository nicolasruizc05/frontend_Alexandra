// declaramos el arreglo de objetos para almacenar los datos
let datosDepto=[]
// funcion del evento onclick para registrar los datos en el local storage
let registrarDatos=()=>{
    // obtenemos los valores de los inputs
    let departamento=document.getElementById("departamento").value
    let responsable=document.getElementById("responsable").value
    let empleados=document.getElementById("empleados").value
    let ubicacion=document.getElementById("ubicacion").value
    let imagen=document.getElementById("imagen").value
    // creamos un objeto con los datos del departamento
    let depto={
        departamento:departamento,
        responsable:responsable,
        empleados:empleados,
        ubicacion:ubicacion,
        imagen:imagen
    }
    // agregamos el objeto al arreglo
    datosDepto.push(depto)
    // almacenamos el arreglo en el local storage
    localStorage.setItem("datosDepto", JSON.stringify(datosDepto))
    // limpiamos los inputs
    document.getElementById("departamento").value=""
    document.getElementById("responsable").value=""
    document.getElementById("empleados").value=""
    document.getElementById("ubicacion").value=""
    document.getElementById("imagen").value=""
}
let verDepartamentos=()=>{
    // obtenemos los datos del local storage
    let datos=JSON.parse(localStorage.getItem("datosDepto")|| [])
    // Obtener el contenedor
    let contenedor= document.getElementById("contenedor")
    contenedor.innerHTML=""
    // mostramos los datos en una tabla
    let tabla=document.createElement("table")
    tabla.style.border="1px solid black"
    tabla.style.borderCollapse="collapse"
    // agregamos el encabezado de la tabla
    let encabezado=document.createElement("thead")
    encabezado.style.backgroundColor="lightgray"
    let filaEncabezado=document.createElement("tr")
    filaEncabezado.style.border="1px solid black"
    let celda1Encabezado=document.createElement("th")
    celda1Encabezado.textContent="Departamento"
    celda1Encabezado.style.border="1px solid black"
    let celda2Encabezado=document.createElement("th")
    celda2Encabezado.textContent="Responsable"
    celda2Encabezado.style.border="1px solid black"
    let celda3Encabezado=document.createElement("th")
    celda3Encabezado.textContent="Numero de Empleados"
    celda3Encabezado.style.border="1px solid black"
    let celda4Encabezado=document.createElement("th")
    celda4Encabezado.textContent="Ubicación"
    celda4Encabezado.style.border="1px solid black"
    let celda5Encabezado=document.createElement("th")
    celda5Encabezado.textContent="Imagen"
    celda5Encabezado.style.border="1px solid black"
    // agregamos las celdas al encabezado
    filaEncabezado.appendChild(celda1Encabezado)
    filaEncabezado.appendChild(celda2Encabezado)
    filaEncabezado.appendChild(celda3Encabezado)
    filaEncabezado.appendChild(celda4Encabezado)
    filaEncabezado.appendChild(celda5Encabezado)
    // agregamos el encabezado a la tabla
    encabezado.appendChild(filaEncabezado)
    tabla.appendChild(encabezado)
    for(let i=0;i<datos.length;i++){
        // creamos una fila para cada departamento
        let fila=document.createElement("tr")
        fila.style.border="1px solid black"
        // creamos las celdas para cada dato
        let celda1=document.createElement("td")
        celda1.textContent=datos[i].departamento
        celda1.style.border="1px solid black"
        let celda2=document.createElement("td")
        celda2.textContent=datos[i].responsable
        celda2.style.border="1px solid black"
        let celda3=document.createElement("td")
        celda3.textContent=datos[i].empleados
        celda3.style.border="1px solid black"
        let celda4=document.createElement("td")
        celda4.textContent=datos[i].ubicacion
        celda4.style.border="1px solid black"
        let celda5=document.createElement("td")
        let img=document.createElement("img")
        img.src=datos[i].imagen
        img.width=100
        img.height=100
        celda5.appendChild(img)
        celda5.style.border="1px solid black"

        // agregamos las celdas a la fila
        fila.appendChild(celda1)
        fila.appendChild(celda2)
        fila.appendChild(celda3)
        fila.appendChild(celda4)
        fila.appendChild(celda5)
        // agregamos la fila a la tabla
        tabla.appendChild(fila)
    }
    // agregamos la tabla al contenedor
    contenedor.appendChild(tabla)
}